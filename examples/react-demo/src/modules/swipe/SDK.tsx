import { PrismaSDK } from "@soulmade/prismaid";

class SDKSingleton {
  private static instance: SDKSingleton;
  sdk: PrismaSDK;

  constructor() {
    if (SDKSingleton.instance) {
      throw new Error("Error - use SDKSingleton.getInstance()");
    }
    this.sdk = new PrismaSDK(
      "SEhn5LQot06xtF8W05sD67KfSwIfTpiU4ssAzaMc",
      "https://api.soulmade-origins.net/prismaid"
    );
    this.sdk.setTwoFingerHoldingMode(true);
  }

  static getInstance(): SDKSingleton {
    SDKSingleton.instance = SDKSingleton.instance || new SDKSingleton();
    return SDKSingleton.instance;
  }
}

export default SDKSingleton;
