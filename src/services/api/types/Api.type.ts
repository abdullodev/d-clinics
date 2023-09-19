export type IApiResponse<T> = {
  config?: any;
  data: {
    code?: number;
    data: T;
    messages?: {
      uz?: string;
      ru?: string;
      en?: string;
    };
    time?: string;
  };
  headers?: any;
  request?: any;
  status: number;
  statusText: string;
};

export type IApiPaging<T> = {
  data: Array<T>;
  total: number;
};
