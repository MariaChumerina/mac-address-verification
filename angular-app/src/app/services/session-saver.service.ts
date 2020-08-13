class SessionSaver {
  static MAC_ADDRESSES_INFO_KEY = 'mac-address-info';

  setMacAddressInfo(address) {
    const serializedAddresses = JSON.stringify(address);
    localStorage.setItem(SessionSaver.MAC_ADDRESSES_INFO_KEY, serializedAddresses);
  }

  getMacAddressesInfo() {
    const serializedAddresses = localStorage.getItem(SessionSaver.MAC_ADDRESSES_INFO_KEY) || '';
    return JSON.parse(serializedAddresses);
  }
}

export const sessionSaver = new SessionSaver();
