import core from "@actions/core";
import exec from "@actions/exec";

(() => {
  const bucket = core.getInput("bucket", { required: true });
  const region = core.getInput("region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  const s3Uri = `s3;//${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`);

  core.notice("Hello from custom JS Action!");
})();
