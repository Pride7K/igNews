import Primisc from "@prismicio/client";

function getPrimiscClient(req?: unknown) {
  const primisc = Primisc.client(process.env.PRISMICT_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACESS_TOKEN,
    req,
  });
  return primisc;
}

export { getPrimiscClient };
