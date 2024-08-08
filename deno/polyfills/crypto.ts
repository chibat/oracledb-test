import browserify from "https://esm.sh/browserify-aes@1.2.0";
import crypto from "node:crypto";

crypto.createDecipheriv = browserify.createDecipheriv;

export default crypto;
