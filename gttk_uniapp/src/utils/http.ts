import { isEmpty } from "lodash-es";
interface Options extends UniApp.RequestOptions {
  // loading 的显示透明蒙层，防止触摸穿
  mask?: boolean;
  // 展示loading
  loading?: boolean;
  baseUrl?: string;
}
type Method =
  | UniApp.RequestOptions["method"]
  | "get"
  | "put"
  | "post"
  | "delete";
class HttpRequest {
  private requestDefaultOption: Options = {
    url: "",
  };
  private requestCount = 0;
  constructor() {
    this.setDefaultOption();
  }
  private setDefaultOption() {
    this.requestDefaultOption = {
      url: "",
      baseUrl: import.meta.env.VITE_REQUEST_BASE,
      loading: false,
    };
  }
  request({
    url,
    method,
    header,
    transResult = true,
    ...otherOptions
  }: {
    url: string;
    loading?: boolean;
    mask?: boolean;
    method?: Method;
    transResult?: boolean;
    [string: string]: any;
  }): Promise<AnyObject> {
    let realMethod: UniApp.RequestOptions["method"];
    if (typeof method === "string") {
      realMethod =
        method.toLocaleUpperCase() as UniApp.RequestOptions["method"];
    }
    const token = uni.getStorageSync("userToken");
    if (isEmpty(token)) {
      console.log("令牌无效");
      return Promise.reject(new Error("令牌无效"));
    } else {
      return new Promise((resolve, reject) => {
        const requestOption: Options = {
          ...this.requestDefaultOption,
          url: this.requestDefaultOption.baseUrl
            ? this.requestDefaultOption.baseUrl + url
            : url,
          method: realMethod,
          ...otherOptions,
          header: {
            ...header,
            "X-Access-Token":
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQwNzIwNjMsInVzZXJuYW1lIjoiYWRtaW4ifQ.KWTur-roh6-dG7u3W1WB5BRuu6VxEoshjWBxkdaj_Pc",
          },
          success(result) {
            if (transResult) {
              const data = result.data as RequestResult;
              resolve(data);
            } else {
              resolve(result);
            }
          },
          fail(err) {
            reject(err);
          },
          complete: () => {
            if (requestOption.loading) {
              this.requestCount--;
              if (this.requestCount === 0) {
                uni.hideLoading();
              }
            }
          },
        };
        if (requestOption.loading) {
          this.requestCount++;
          uni.showLoading({
            title: "正在加载中",
            mask: requestOption.mask,
          });
        }
        uni.request(Object.assign(this.requestDefaultOption, requestOption));
      });
    }
  }
}

export default new HttpRequest();
