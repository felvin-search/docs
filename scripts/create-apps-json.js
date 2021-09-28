// Script which reads all the Instant Apps manifest YAML files and creates a single JSON for generating the showcase page
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs-extra");
const glob = require("tiny-glob");
const _ = require("lodash");

const REQUIRE_KEYS = ["name", "description", "screenshotUrl", "exampleQueries"];

async function main() {
  // Load all plugin manifest files
  // TODO: Could read from a remote location as well.
  const allYamlFiles = await glob(
    path.resolve(__dirname, "../static/instant-apps-manifests/*.{yaml,yml}"),
    { filesOnly: true, absolute: true }
  );
  console.log(`Loaded ${allYamlFiles.length} plugin manifest files.`);
  console.log(allYamlFiles);

  // Convert YAML files to JSON
  const allManifestJson = [];
  for (const yamlFile of allYamlFiles) {
    const manifestYaml = await fs.readFile(yamlFile, "utf-8");
    const manifestJson = await yaml.load(manifestYaml);
    // Ensure manifest file has required keys

    if (
      _.intersection(REQUIRE_KEYS, Object.keys(manifestJson)).length !==
      REQUIRE_KEYS.length
    ) {
      console.log("Missing required keys in one of plugin manifest files.");
      console.log(yamlFile);
      console.log(manifestJson);
      process.exit(1);
    }

    // Add filename as a unique key
    manifestJson.id = _.last(yamlFile.split("/"));

    allManifestJson.push(manifestJson);
  }

  // Save final JSON
  const finalJsonPath = path.resolve(
    __dirname,
    "../src/components/generated-manifest.json"
  );
  await fs.writeJson(finalJsonPath, allManifestJson);
  // TODO: move file in appropriate location

  console.log(`Wrote plugin manifests to ${finalJsonPath}`);
}

main();
