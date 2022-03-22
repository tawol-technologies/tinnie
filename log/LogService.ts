import AppConfigs from '../../../configs/AppConfigs';

export const LogService = {
  log(error: any) {
    console.error(error);
  },
  error(error: any) {
    process.env.NODE_ENV !== 'test' && console.error(error);
  },
  info(info: any) {
    AppConfigs.IS_DEV && console.log(info);
  },
};
