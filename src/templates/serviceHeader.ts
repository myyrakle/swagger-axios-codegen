import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerOptions } from "../baseInterfaces";
import { abpGenericTypeDefinition, universalGenericTypeDefinition } from './genericTypeDefinitionTemplate';
import { trimString } from '../utils';

export function serviceHeader(options: ISwaggerOptions) {
  const classTransformerImport = options.useClassTransformer
    ? `import { Expose, Transform, Type, plainToClass } from 'class-transformer';
  ` : '';
  return `/** Generate by swagger-axios-codegen */
  // tslint:disable
  /* eslint-disable */
  // @ts-ignore
  import axiosStatic, { AxiosInstance } from 'axios';

  ${classTransformerImport}

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
    axios?: any,
  }

  ${requestHeader()}
  `;
}



export function customerServiceHeader(options: ISwaggerOptions) {

  return `/** Generate by swagger-axios-codegen */
  // tslint:disable
  /* eslint-disable */
  export interface IRequestOptions {
    headers?: any;
  }

  export interface IRequestPromise<T=any> extends Promise<IRequestResponse<T>> {}

  export interface IRequestResponse<T=any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

  export interface IRequestInstance {
    (config: any): IRequestPromise;
    (url: string, config?: any): IRequestPromise;
    request<T = any>(config: any): IRequestPromise<T>;
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
    axios?: any,
  }

  ${requestHeader()}
  
  `
}

function requestHeader() {
  return `

  // 기본 Axios 객체
  import { Api } from '@psyrenpark/api';
  export const serviceOptions: ServiceOptions = {
    axios: Api,
  };

  const projectName = "eradmin";
  const projectEnv = "prod";

  const v1Api = \`\${projectName}-\${projectEnv}-api-v1\`;
  const v1Cdn = \`\${projectName}-\${projectEnv}-cdn-v1\`;
  const v1NoneAuth = \`\${projectName}-\${projectEnv}-noneauth-v1\`;
  const v1Cms = \`\${projectName}-\${projectEnv}-cms-v1\`;

  function pathToApiName(path: string): string {
    const firstPath: string = path.split('/')[1];
    let apiName = ''
  
    switch(apiName) {
      case 'api': {
        apiName = v1Api
        break;
      }
      case 'cdn': {
        apiName = v1Cdn
        break;
      }
      case 'noneauth': {
        apiName = v1NoneAuth
        break;
      }
      case 'cms': {
        apiName = v1Cms
        break;
      }
    }
  
    return apiName;
  }
  `
}

export function definitionHeader(fileDir: string | undefined) {
  let fileStr = '// empty '
  if (!!fileDir) {
    console.log('extendDefinitionFile url : ', path.resolve(fileDir))
    if (fs.existsSync(path.resolve(fileDir))) {
      const buffs = fs.readFileSync(path.resolve(fileDir))
      fileStr = buffs.toString('utf8')
    }
  }

  return `
  ${universalGenericTypeDefinition()}
  ${abpGenericTypeDefinition()}
  // customer definition
  ${fileStr}
  `
}
