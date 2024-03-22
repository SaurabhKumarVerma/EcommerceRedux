declare module "react-native-config" {
  export interface NativeConfig {
    API_URL?: string;
    ACCESS_TOKEN_KEY?: string;
    REFRESH_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
