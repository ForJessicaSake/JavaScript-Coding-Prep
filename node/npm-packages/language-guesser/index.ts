const franc = require("franc");
const langs = require("langs");

const params = process.argv.slice(2);
const sentence = params.join(" ");

try {
  const languageCode = franc(sentence);
  if (languageCode === "und") throw new Error("Unable to determine language");
  console.log(languageCode);
  const language = langs.where("3", languageCode)?.name ?? "Unknown";
  console.log(`Our best guess is: ${language} `);
} catch (err) {
  console.log(err ?? "Unable to determine language");
}
