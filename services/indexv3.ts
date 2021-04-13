/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
// @ts-ignore
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

const basePath = 'http://localhost:3000/prod/v1';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class FooService {
  /**
   *
   */
  static selectUser(
    params: {
      /** 그냥 텍스트 */
      foo: string;
      /** 그냥 텍스트2 */
      bar?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/select-user';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { foo: params['foo'], bar: params['bar'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class CmsService {
  /**
   *
   */
  static user(
    params: {
      /** 유저 식별자 */
      userId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cms/user';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { user_id: params['userId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static user1(
    params: {
      /** requestBody */
      body?: PutUserParameter;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PutUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cms/user';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static user2(
    params: {
      /** requestBody */
      body?: PostUserParameter;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PostUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cms/user';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static user3(
    params: {
      /** 유저 식별자 */
      userId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cms/user';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { user_id: params['userId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class UserService {
  /**
   *
   */
  static post(
    params: {
      /** 포스트 식별자 */
      postId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetPostResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/post';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { post_id: params['postId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static post1(
    params: {
      /** requestBody */
      body?: PutPostParameter;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PutPostResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/post';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static post2(
    params: {
      /** requestBody */
      body?: PostParameter;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PostPostResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/post';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static post3(
    params: {
      /** 유저 식별자 */
      postId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeletePostResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/post';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { post_id: params['postId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class CdnService {
  /**
   *
   */
  static userCount(options: IRequestOptions = {}): Promise<UserCountResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cdn/user-count';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface Response {
  /** 그냥 텍스트 */
  foo?: string;

  /** 그냥 텍스트2 */
  bar?: string;
}

export interface GetUserResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;

  /** 유저 식별자 */
  user_id?: number;

  /** 이름 */
  name?: string;

  /** 나이 */
  age?: number;
}

export interface PutUserParameter {
  /** 유저 식별자 */
  user_id?: number;

  /** 이름 */
  name?: string;

  /** 나이 */
  age?: number;
}

export interface PutUserResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;
}

export interface PostUserParameter {
  /** 이름 */
  name?: string;

  /** 나이 */
  age?: number;
}

export interface PostUserResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;

  /** 유저 식별자 */
  user_id?: number;
}

export interface DeleteUserResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;
}

export interface GetPostResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;

  /** 유저 식별자 */
  post_id?: number;

  /** 제목 */
  title?: string;

  /** 내용 */
  content?: string;
}

export interface PutPostParameter {
  /** 유저 식별자 */
  post_id?: number;

  /** 제목 */
  title?: string;

  /** 내용 */
  content?: number;
}

export interface PutPostResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;
}

export interface PostParameter {
  /** 제목 */
  name?: string;

  /** 내용 */
  content?: number;
}

export interface PostPostResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;

  /** 유저 식별자 */
  post_id?: number;
}

export interface DeletePostResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;
}

export interface UserCountResponse {
  /** 성공여부 */
  success?: boolean;

  /** 메세지 */
  message?: string;

  /** 유저 수 */
  user_count?: number;
}
