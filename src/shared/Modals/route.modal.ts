export interface RouteDTO {
  path?: string;
  exact?: boolean;
  name?: string;
  component?: any;
  chilrends?: Array<RouteDTO>;
  redirect?: string;
}
