interface ApiResult<D> {
  error: any;
  loading: boolean;
  data: D;
}

interface ApiInfoData {
  application: string;
  version: string;
}

interface School {
  School: string;
  Website: string;
  CDSCode: string;
}

type SchoolsData = Map<string, School>;

interface FlapReduxState {
  apiInfo: ApiResult<ApiInfoData>;
  schools: ApiResult<SchoolsData>;
}

interface ReduxState {
  flap: FlapReduxState;
}
