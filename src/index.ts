declare global {
  interface Navigator {
    msDoNotTrack: any;
  }
  interface External {
    msTrackingProtectionEnabled: () => boolean;
  }
}
export default class DoNotTrack {
  public static Status(): boolean | Error {
    if (
      window.doNotTrack ||
      navigator.doNotTrack ||
      navigator.msDoNotTrack ||
      'msTrackingProtectionEnabled' in window.external
    ) {
      if (
        window.doNotTrack === '1' ||
        window.navigator.doNotTrack === 'yes' ||
        window.navigator.doNotTrack === '1' ||
        window.navigator.msDoNotTrack === '1'
      ) {
        return true;
      } else if ('msTrackingProtectionEnabled' in window.external && window.external.msTrackingProtectionEnabled()) {
        // This condition has to be defined seperately to avoid msTrackingProtectionEnabled undefined error
        return true;
      } else {
        return false;
      }
    }
    return new Error('Unsupported!');
  }
  public static IsUnSupported(){
    try{
      DoNotTrack.Status();
    }catch(e){
      return true;
    }
    return false;
  }
  public static IsDisabled(){
    if(DoNotTrack.IsEnabled() === false){
      return true;
    }
    return false;
  }
  public static IsEnabled(){
    try{
      if(DoNotTrack.Status() === true){
        return true;
      }else{
        return false;
      }
    }catch(e){
      return false;
    }
  }
}
