import CommonDesktopMetaDataResolver from './commonDesktopMetaDataResolver.js';
import CommonMobileMetaDataResolver from './commonMobileMetaDetaResolver.js';

export default class CommonMetaDataResolver {
  static resolve(driver, capabilities, opts) {
    const platform = opts.platformName || opts.platform;
    if (['ios', 'android'].includes(platform.toLowerCase())) {
      return new CommonMobileMetaDataResolver(driver, capabilities);
    } else {
      return new CommonDesktopMetaDataResolver(driver, capabilities);
    }
  }
}
