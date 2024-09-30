import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.models,
  emitMode: EmitModes.ts,
  skipEditableModels: true,
  skipIdModels: true,
  skipOperations: true,
  skipComments: true,
  services: {
    swissparl: {
      source: "resource/swissparl.xml",
      output: "src/generated",
    },
  },
};

export default config;
