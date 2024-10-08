'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ce297a806d160b1d9a86d0a73d37b994",
"index.html": "7cd1b77ed6651ce68373e3961f18e876",
"/": "7cd1b77ed6651ce68373e3961f18e876",
"main.dart.js": "0fd854827431c6133fd1c78c25a72dd4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6e3d1c8168c58a1d90a716407b71432d",
".git/REBASE_HEAD": "2740ddeb0c41405fa7e83c9671003500",
".git/ORIG_HEAD": "77b8e5b4e15baf45b0e1f264ab0fdd97",
".git/config": "7dcba934c767267845d3c2bb6f81d964",
".git/objects/95/3641f22db5ea0afe2298372b2f75bad8add344": "c7d3b2a2f7d5d80517a79711f5115f01",
".git/objects/66/083d46cb1c41174ea8ab6ccb9a252fd1179545": "75d27beace9278d530ab86c6d402cdda",
".git/objects/3e/c9a1699268e456961b6c038ebcaaa3e92c933f": "64fb1c7ab950c60f387752981823a51f",
".git/objects/68/efbe230f6440f6e72b28ebbf244ca41d8fdc22": "f24022340be7dd8438120baf538e79ef",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/e096a72ff3c34152edf8a1bd44b73dad23296a": "67dd36f78684343176db737b3cc8625a",
".git/objects/6a/fee472359630ae01851efe165bbb823c55b7ba": "70ab80f0a42fd125a0a1d5a88bc5b406",
".git/objects/32/140c5282a17b97f0c9bd3c3293b43c0ebd44f2": "490d6f45605f33f582f3b627afe27cf7",
".git/objects/35/a1ad088b711165967ab7cffd15ed4615838e44": "52efb89a39a7be593c58fc26b21162e6",
".git/objects/35/7e549a0ecfe881910914bbbcadee7f9878841f": "44862e668d54eabf899a4135eea0a6fd",
".git/objects/35/9a5749199337ec0eae0786b5bc631d9ef4162b": "0886c89f8f0f9bcbd52556ed5ecd7d17",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/51/870ce2847ebbd04ae982ea37daeaab02a565ef": "b1bb4b882d6c59d7aed17e1e6751b6d0",
".git/objects/3d/b0f62ad93ea91650803d8e0772f734a1397365": "f13b769ecf8dc35d6f841e4912f98a04",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/828ed4c84b3f655f313fb0e783f35fecc8f0ed": "0a98a03c53643a5f027b0a941e211d89",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/e5a434b4ac31f6963dd1c2805aebc3f03f2140": "c9ca9aec2b794a89eeb52a481a594ad6",
".git/objects/33/f65b23006efae894e0e489e62677c35809a671": "b8e5b00816516de1016213ee7714c9ec",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/33/91bc57e3dc223e4624f89bc72ef8af38dd8db8": "d817c2e51367c297748dcd09f7b4ec5c",
".git/objects/02/60af9b5eaefb6df7cbb654f7185722373326d6": "39ee2fb9e1a04f71e6563c1c6a6ddf40",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/8fb68ee80e0ee65b037e9bfd71e9a8c890499f": "356bc7da9e93e53c50ecc4dc5abf4f13",
".git/objects/bb/7e1e76a848a562569d88d6cc2b19e5225f1264": "2cc944fbefc6848c560172655d216e35",
".git/objects/b4/573adc4f8881289e1d1c239b000f7722154035": "efc1c35b19e16fe5da65b558b3fda7f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9d4f26f5a4b70a6922c3de5e025ffbde2b32f1": "13b8b83bc1e751d8762fa5ca0e6066dc",
".git/objects/e5/380f8b7b57094dd2e259dc4649739a185f97cb": "6ba2fc66fda1953013e575af66dd9324",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b9eaa5a4f9a872e587c67f8a57a14240f3aebe": "b6cfc928c5973bd818295484a04abdeb",
".git/objects/c0/3874a331f02e6d8b8eb94c22827f89c0dc5cad": "17d912f1ed05d16330396f5c7947e4d2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/da720a3e78670335c4c5e6baeb891eb70a640c": "d0c9f579c8bed618765ab5b7df2b63f5",
".git/objects/fe/ca354afb8b28b604d7de64c9dd4a265562a9b8": "9c75458c8e2d32de1d5b4e7a06730b54",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/2ce4fbee6c5474080a5000f318846dd841ee37": "a29663a8b82b9a8b7d7fba67666f36bc",
".git/objects/4e/a3f373903ce343a432e92b921141cc5907492a": "fa08002c1a1dba95dd1bf52830351885",
".git/objects/20/f01ac0a07993991721f3442abdcb214f855c8f": "9434f20d357063a99880de5b378de0c5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/0f962a025859caf4e8473ac12e219291fe364c": "b243fa844ebbe032b9c1272d9e5ecacf",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/80/3cb79f7f6fb56939a55f6ff191894d65f21d7b": "a1c6608c4e190eed25eef9811e087dad",
".git/objects/74/bf00664f9f352a53e6f60e42609d4c1423251d": "aa66a15c0b8a980a5d929669aaef6ad3",
".git/objects/17/ad0307d3892abefcdb39bc52a163a2b8373a34": "0d54ac7fdf3e681d04183d3110a2f666",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/6104a320718edab1fe33e931d9bb028822d47a": "974b051d45cc9c8b6c6fbc549787250e",
".git/objects/72/cdf43324a2347a9cf81d0a57f65e648ab29851": "5a59b870f1bbe8fb5d1c56d277f80c79",
".git/objects/2f/a2c44b6a98335752142f9ae2f4dcef127265b7": "83b3e313b45758a1222096ebb1fb9266",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/e2a2843eefdf786cf8a37c29217d18dad59215": "275d9a4b69cd99e85370fcfeddd32712",
".git/objects/36/2a0bd675797feeee6f0c193cbbb23d0f578da9": "5c208d92a7d5746f72d36f830e02b0f4",
".git/objects/5c/be580772d11f49b1ac68e8bce845ae6d43191a": "909250c0941aff674c177519e5a93b30",
".git/objects/5d/0481c48c102bbb76a2764dde5bd5c79454630d": "536481eb4ca43e5df345fdd821d7a297",
".git/objects/31/afb375145b6058f1b76bde2a11dbb300da1e97": "0a29e4418da0a870246999be15f7e31f",
".git/objects/65/c78c8cac33abf7852377c420ecac91ed5a0f0b": "34e98db10f2c79a7e3f25e2568f65ef9",
".git/objects/3a/905c22d6a1f3a85d5cf4888bd8e5129d7329b3": "52769777dc662be358355cd11d70aef5",
".git/objects/3a/64164d2beff4ddd081f1a3917ba4fa0998c8aa": "43d09ad84d15335ac51659be2da1946d",
".git/objects/30/db28539b0b61d2f68f2e23f5e1ab9c436c549a": "3c8f86be1f30b2cf95121bbc361e9f8e",
".git/objects/08/c7441d08596a5a93ef57504a168159358fe1de": "6320296f0c89c3c6bd2ed3c3fa5c03d2",
".git/objects/6d/9377238db62c64326092367bf76de7d0a9fdbf": "5d3f39207f5d1ae8c1b73312bfc0c1d0",
".git/objects/39/7f54c9833b32e3f6452a9a956993a08848377f": "e8317dde52a99a4354760c4ad4e46c10",
".git/objects/39/01bceb4284b4da2f30992d28f73d9f76340bcf": "3ded7ea5f5f1572fad9a79603244d42c",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/0a/2e0618df0e27b44a285c96e487d272cf7d55f6": "b015c7eca90ffc5688edcf8029d2208d",
".git/objects/d3/6a807370b0577cdc67dd566455d3371647d4b8": "135da15db6554c7948d9ef32e4bedd0c",
".git/objects/d3/74f9548a7599fcb96661e20f6a0f4d940e7fd7": "c76b2a0a213a523d02e0833c0cd1d67c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/310543aa217d5a0bd7785b637c1cb30cfaed5b": "b628dfb1a1278ece6a891ee246f42cc0",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/a9/c71eaa8d4e204df6c9b1bbc1b26a84b46a6abc": "c09cc4ca6fd2c3693f70c557d94e60ba",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/af/ad813ac072d59ed9b5323529692001a4b802d9": "7468f78e97677f6f53104f01bb5a9697",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/df99d7164d09b4b8195ba07c8e8b778db15491": "2facb7e5345312f16907ac6ac27c786a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1b47e0f27ab6c89d9d2cb162a20b182e777312": "f688d2db84f3b542c8075d920bc8f455",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/e791950209452c1299ae831a199ea985a0dd05": "78dd3aef10e1ac030ef2fcd6e677c475",
".git/objects/cd/d438e6b277689b7cb2d99bcc815bd7057aafe5": "f8c4d419ca0d550b4038fde643990ba5",
".git/objects/f0/5d3d8965fa3febc26d4c8043ecfa5471e11c5f": "1da9bdac1924ceb8bad01caa1c87b74d",
".git/objects/f7/89f8a43ef931fd959134a4f6ce73d355a16447": "9c442d00c8e758baf3919f7644485d9d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/c797cd2c182c8e664d1c7e427f49b2d28a7e19": "a7d512412bd77dd8ee9649825091216e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/4de59a331ee1dfa4d6e097526b2f1cbe04b30b": "189b78c8908fee884e8b33a04f80443a",
".git/objects/ce/006abc8b63419b55004efb47a897cd59e829fa": "025f096aef189ae8d34f028476c749bc",
".git/objects/1b/0e4e86a380d0fec4404adbac553c263264b121": "aa7f1300a276e99aa347be772933d780",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/3a7737fc846369c8ebf6714b45b753af245196": "4a609b2a9cd6603a5b28320197445b44",
".git/objects/23/f6fbfe528d7c6c2ffc22e4e97dee8b3cd01e20": "2e832a865331edbb8fa7cfa4ef6ce02e",
".git/objects/15/834e29de9347c39d1cb78bf3e60f6dd01511d2": "74216f04576dc060aafdd28429b962e6",
".git/objects/15/e8bf30a1263a169b63d8c6651f0d9cf068b53d": "eba6569e29641ff585546f3ba0b7fd73",
".git/objects/1d/e73a0cbc0c5d28bdffc2ecfb221233cbd0633c": "16c2eeb290617c63f3fc48f80456b000",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/8947d26156e80fad6a7c5c02220a29ccb760bc": "6eeb2f718287d862507c02eebc5460ca",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/bc3d67ddd71e97932265de101455e2db970858": "0d7b6ea77e09d1b4606bb5d9eee3bd63",
".git/objects/49/9de2d16b2915de1a116ede175f6868106bcb10": "5537190d67ba83f9ab4121878f447698",
".git/objects/78/ba45c8c2dc6caf46121acb739b8391b4410d93": "e90edf079eaca7ddf9e0898237f8554d",
".git/objects/8b/cbcfce982af74d6e1ac9cac05275831db44134": "ce314fa6bdc7575ed284459fccb82078",
".git/objects/13/40d8cac34d21efbf1463bc3c504e82cc82d53a": "d5b974698cd48559bf383b6c73394194",
".git/objects/7a/08e4d9c862dca1939c52af14eef4d64bcb6755": "25d2d6e4092e887c89677c63d04bf938",
".git/objects/25/8e274b0b3e043e1dc45ca08c8575a161ecf207": "a825ba0d224754e12add342234c48f65",
".git/objects/25/4079eedc599b17681a60077884ad794fd41424": "8cafa53106b1e86143c02a6c378778df",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f5c0d0ffce7997136f06d984a0a5069",
".git/logs/refs/heads/main": "cfd7b156fd6db31449d38049536a4c67",
".git/logs/refs/remotes/origin/HEAD": "ae5b350a3672c4a257cd56b7c5c42f11",
".git/logs/refs/remotes/origin/main": "bfdd03b32dabde605c52851c9caaa10e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "77b8e5b4e15baf45b0e1f264ab0fdd97",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "77b8e5b4e15baf45b0e1f264ab0fdd97",
".git/index": "0934eb5decc621b2a4e86015b9b7d537",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ad4f03ee918c3ebdde6b26a65d68b452",
".git/FETCH_HEAD": "e0cec26f06d8b337c92dae70b64fcd7a",
"assets/AssetManifest.json": "e26ab0f0a9ebee8025260de29a88a4ca",
"assets/NOTICES": "24e8e292dd33b0b78e2e8f4003584aa0",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.bin.json": "9117d74063fd5c45be7a3fbe3a440b4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3debc5a8dc60f399651a745a890aed07",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
