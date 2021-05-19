import { BASE_API_PATH } from "./constants";
import { METHOD, Options, OptionsNoMethod} from "./types";
export default class HTTP {
	private path: string;

	constructor(path: string){
		this.path = BASE_API_PATH + path
	}

  get(options: OptionsNoMethod): Promise<any> {
    return this.request({...options, method: METHOD.GET});
  };

  post(options: OptionsNoMethod): Promise<any> {
    return this.request({...options, method: METHOD.POST});
  };

  put(options: OptionsNoMethod): Promise<any> {
    return this.request({...options, method: METHOD.PUT});
  };

  delete(options: OptionsNoMethod): Promise<any> {
    return this.request({...options, method: METHOD.DELETE});
  };

  request(options: Options): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(options.method, this.path + options.url);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhr.withCredentials = true

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: JSON.parse(xhr.response)
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: JSON.parse(xhr.response)
      });
    };

    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }
    let params = options.params;

    if (params && typeof params === 'object' && options.method === METHOD.GET) {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }

    xhr.send(JSON.stringify(params));
    });
  };
}
