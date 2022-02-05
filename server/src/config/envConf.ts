
import { config as configDotenv } from 'dotenv'
import { resolve } from 'path'
import { Config } from '@config/type';

switch (process.env.NODE_ENV) {
  case "development":
    console.log("Environment is 'development'")
    configDotenv({
      path: resolve(__dirname, "../../../.env-dev")
    })
    break
  case "test":
    configDotenv({
      path: resolve(__dirname, "../../../.env.test")
    })
    break
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}

const getConfig = (): Config => {
  return {
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
    PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
    MONGO_URI: process.env.MONGO_URI ? process.env.MONGO_URI : "mongodb://localhost:27017/mate_shop",
    JWT_SECRET: process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret"
  };
};

const getSanitzedConfig = (config: Config): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
