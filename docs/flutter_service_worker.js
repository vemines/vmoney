'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a6c53b5251509221be41d9414091a506",
"assets/AssetManifest.bin.json": "26f12defabefe1bfee4b76e3ae9d3fc9",
"assets/AssetManifest.json": "c7f954b7bf3695e91160ad523f741bdd",
"assets/assets/images/flags/ad.png": "e63b2bf752f45176f6dbc9d8fd5b3e0b",
"assets/assets/images/flags/ae.png": "47942caaba7a07fa5f93b97656b3ac4d",
"assets/assets/images/flags/af.png": "7ee4136396afa8ecdbc41ec5cb2ab74c",
"assets/assets/images/flags/ag.png": "6f32bd54bda914b43fd9379f5b714adf",
"assets/assets/images/flags/ai.png": "5df20e1d312649adb8955f6df33e56e1",
"assets/assets/images/flags/al.png": "25ddccfd7e38c135219a2b745977988e",
"assets/assets/images/flags/am.png": "dd293c9045d7f9c500dc4bef0fc82ee0",
"assets/assets/images/flags/ao.png": "90be4b7016d8a94bddda4f42dfd11b0f",
"assets/assets/images/flags/aq.png": "b4585cc1af2250814c0d2e376945a4e3",
"assets/assets/images/flags/ar.png": "33bdafc884a1cf9f0da4b9b66695b027",
"assets/assets/images/flags/as.png": "6eb0f605bc968106e314a962c3a7521f",
"assets/assets/images/flags/at.png": "bf53c33b9c0a2057aac05c5bc0e0f151",
"assets/assets/images/flags/au.png": "bf6bccf48f8054261c8272705affadb3",
"assets/assets/images/flags/aw.png": "fa9b76b0f4da4f3f14fd718a2ec7df8b",
"assets/assets/images/flags/ax.png": "112b67928dbe2607fe386229fb97c4fe",
"assets/assets/images/flags/az.png": "80f1296c43177a3a0d7871abba0f2e76",
"assets/assets/images/flags/ba.png": "c87fbd364ee1ba3d4cd5f12bb72fefc1",
"assets/assets/images/flags/bb.png": "b2932102dd7b9d1f9a7ddd05297d9b82",
"assets/assets/images/flags/bd.png": "d8f44337e8c4a4f7585760213d4b8d58",
"assets/assets/images/flags/be.png": "2acda6fd6964afbca8abb5a011d4343c",
"assets/assets/images/flags/bf.png": "76941503e4e31420b6c205513299ea75",
"assets/assets/images/flags/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/assets/images/flags/bh.png": "02dc947aadc78cd067ed5a80da488be8",
"assets/assets/images/flags/bi.png": "14920067087f014aca8022ab6a3ca035",
"assets/assets/images/flags/bj.png": "a66c2b23ae5f36b0d92e2b4a49ef23d5",
"assets/assets/images/flags/bl.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/bm.png": "9dff8b22a99c08f2f99e239b3fbadbbf",
"assets/assets/images/flags/bn.png": "11e4211593c06734f466ed05e5de2f98",
"assets/assets/images/flags/bo.png": "8b65796c1645967be88cf2b76f5161dc",
"assets/assets/images/flags/bq.png": "38fd9188d28349c6a5f7b9890eb45387",
"assets/assets/images/flags/br.png": "84fe5dbf0a9aba71f0e31b6d8d59138c",
"assets/assets/images/flags/bs.png": "5c910dfbcd14dce3f275a2c3a02ecef4",
"assets/assets/images/flags/bt.png": "f22628e4c0e9c506532adcfef1c6a14e",
"assets/assets/images/flags/bv.png": "db5a5b31751a579e540e928cd7471e5a",
"assets/assets/images/flags/bw.png": "b7ab65b5e0bd8c313d5f10abf6668d3a",
"assets/assets/images/flags/by.png": "e5c079e9f18d20f12ea548108fecb6d1",
"assets/assets/images/flags/bz.png": "5016be1e18accca352a839bdff1190c3",
"assets/assets/images/flags/ca.png": "8bccaab0b5b2b700b240a7a2ec1a40a8",
"assets/assets/images/flags/cc.png": "cec73db1b0cdc8fee3f263ecb4ca2ef1",
"assets/assets/images/flags/cd.png": "107fc61a7018765f016f0861d1d3ac80",
"assets/assets/images/flags/cf.png": "95875c5066a9c6eee867b6c92f7c562f",
"assets/assets/images/flags/cg.png": "3ea7e211d73371a0a4e96f92669dea63",
"assets/assets/images/flags/ch.png": "c6cef0753dcc4c6b4af4d72f3d14d98e",
"assets/assets/images/flags/ci.png": "11239fa65ab1a95ccc25a680e1dde4dd",
"assets/assets/images/flags/ck.png": "42e93f325f75a3a09011106131d819cf",
"assets/assets/images/flags/cl.png": "22af638e8bbe5d710b5e6e2f7a46063f",
"assets/assets/images/flags/cm.png": "7ad79166299e6c66b408487dd7c757aa",
"assets/assets/images/flags/cn.png": "40493c2eb8aebe83a90253fe4e5a466f",
"assets/assets/images/flags/co.png": "0ea8303c48f1eb71f3e94d3a5518a246",
"assets/assets/images/flags/cr.png": "7eb66a2e6d8792be0b1a7d4d9fa0c590",
"assets/assets/images/flags/cu.png": "83aaeb9944eda8420366a7016dc43d91",
"assets/assets/images/flags/cv.png": "418e0a34921ffcbb0fef008a66b58682",
"assets/assets/images/flags/cw.png": "2b4b40ea39481028d90e1a7f82f10da6",
"assets/assets/images/flags/cx.png": "a85ca7b4c8e6c98874f6b32384afb249",
"assets/assets/images/flags/cy.png": "c23e5345ea28363b1d02bea587d0ff5e",
"assets/assets/images/flags/cz.png": "1e0c00bb5df1c244fefd17550c814b5e",
"assets/assets/images/flags/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/assets/images/flags/dj.png": "b3871ee6acc82b035899a50f65579e47",
"assets/assets/images/flags/dk.png": "40dc510e1a9859d42a0d65c57b0f1811",
"assets/assets/images/flags/dm.png": "b5dbbfe975165a6a94b2f973bbb7a0a6",
"assets/assets/images/flags/do.png": "40f49527732206fa3614d6616b8f9f0f",
"assets/assets/images/flags/dz.png": "6a0dae9d9f35667157e12df8b30906f8",
"assets/assets/images/flags/ec.png": "cf97bca568292ab4d9ed40c5092872eb",
"assets/assets/images/flags/ee.png": "d00e16b53763c7ce8a42dd02fa411fb8",
"assets/assets/images/flags/eg.png": "00e0daa22238a2b81b9f536a3dad61a9",
"assets/assets/images/flags/eh.png": "91ac612e3692958cae145d628cd894e9",
"assets/assets/images/flags/er.png": "13621066d6a91da47be26446b0c1e72d",
"assets/assets/images/flags/es.png": "7f097550f636dc0a44b5c203bace1fa3",
"assets/assets/images/flags/et.png": "8fdd0b2353524f7eec55c55c9b37a9f1",
"assets/assets/images/flags/eu.png": "80fde4e0e9fde9eecbfa4c4a7ad02089",
"assets/assets/images/flags/fi.png": "29dfb8599b8b4b72492a48ff93705e46",
"assets/assets/images/flags/fj.png": "fc66094902ad729a3ba5db3480226577",
"assets/assets/images/flags/fk.png": "49a25ee106b561a38fdc7468057e361e",
"assets/assets/images/flags/fm.png": "88fa55eada2af65bb239ac775576a99c",
"assets/assets/images/flags/fo.png": "c05f9b2f8980bf1997ca1ac25a22ea70",
"assets/assets/images/flags/fr.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/assets/images/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/assets/images/flags/gb-nir.png": "9775a38c2beb3ce20dc55c0a83a1405a",
"assets/assets/images/flags/gb-sct.png": "cf550516c457b4127ec9c1bf360237b2",
"assets/assets/images/flags/gb-wls.png": "246cead05329824fa7be9235499a717c",
"assets/assets/images/flags/gb.png": "9775a38c2beb3ce20dc55c0a83a1405a",
"assets/assets/images/flags/gd.png": "a1ec4c8e08399e2a0cc6fa4c3524f57b",
"assets/assets/images/flags/ge.png": "6d70943f66555ff8c5967cef83705ecc",
"assets/assets/images/flags/gf.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/gg.png": "983ec6d9f7154a9a38f33d9db22754e9",
"assets/assets/images/flags/gh.png": "f9fe85920124987b9b5490e0cf570d76",
"assets/assets/images/flags/gi.png": "e2edfa1d0980fc33106d4361e6019732",
"assets/assets/images/flags/gl.png": "92c7d62eb6cb80cd713ccc13899003e8",
"assets/assets/images/flags/gm.png": "dde3260db16c0028eb7d16e7f6922b65",
"assets/assets/images/flags/gn.png": "463c71ae709a3933778b6b29aa42a921",
"assets/assets/images/flags/gp.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/gq.png": "c190b1b20bbeaa979f4f5e5d11dddde4",
"assets/assets/images/flags/gr.png": "ce6e3a5fdae5881458db7a4af5714fa0",
"assets/assets/images/flags/gs.png": "e1a5970839d4368760de4e8c5e724a20",
"assets/assets/images/flags/gt.png": "ba42d90125817add246fa4e908e27edf",
"assets/assets/images/flags/gu.png": "df9d2a55deb6f5c13b71c3e579b1a68f",
"assets/assets/images/flags/gw.png": "df879fca2e739d4bfb4e8c5b0bb70c24",
"assets/assets/images/flags/gy.png": "69ae7b46de72ab309d3cdfd1a42cbad4",
"assets/assets/images/flags/hk.png": "20f7de059bc6c6986937029ef3ba8a92",
"assets/assets/images/flags/hm.png": "bf6bccf48f8054261c8272705affadb3",
"assets/assets/images/flags/hn.png": "82b242f4a93f495951893bf56a0919f2",
"assets/assets/images/flags/hr.png": "d7b1b6b6d0f2477f9765bc505143aa75",
"assets/assets/images/flags/ht.png": "af593bee126c53042bc7a19a2923059c",
"assets/assets/images/flags/hu.png": "827e0789ed0ee8f208988395c866529a",
"assets/assets/images/flags/id.png": "5e1b95a82e2c2a21584b50ec79eb62d8",
"assets/assets/images/flags/ie.png": "ec3b1fcae14b992688ba80866f88dea6",
"assets/assets/images/flags/il.png": "4c000349ed5152280e0de359d08f04ce",
"assets/assets/images/flags/im.png": "8219eaa830833f008494156b071f97b1",
"assets/assets/images/flags/in.png": "535d7ab948d6e80ad448e457733a2025",
"assets/assets/images/flags/io.png": "51fc8ce1f5fdd1edca1897db7efb122d",
"assets/assets/images/flags/iq.png": "54cafb01b73f52aac891e1b119846664",
"assets/assets/images/flags/ir.png": "66cfffa8b685a152112789581357c5c8",
"assets/assets/images/flags/is.png": "29c08f551b19b370bd3fdd6218f11180",
"assets/assets/images/flags/it.png": "ebe1fe17f46723906bde77cafc7cfd03",
"assets/assets/images/flags/je.png": "9dd212ba929e66c46b775bf74965356c",
"assets/assets/images/flags/jm.png": "8ae7710fb03e383bae66d3b2609035e6",
"assets/assets/images/flags/jo.png": "e73cfab5358e6a9f0869a78c92bf4365",
"assets/assets/images/flags/jp.png": "c7cce7a887665e129ff68fada874c6e9",
"assets/assets/images/flags/ke.png": "bfb62f0bc86356a4a02527245d4b9027",
"assets/assets/images/flags/kg.png": "745b8dfcf37cdd07b257c18e5bc89749",
"assets/assets/images/flags/kh.png": "2dc715176061f906bb28d07ce189a4f7",
"assets/assets/images/flags/ki.png": "47b95ac2b6d2fdf221897c99cfc52c7c",
"assets/assets/images/flags/km.png": "370b8faed81a960e8c83ff495149d42c",
"assets/assets/images/flags/kn.png": "c495ba2ec11b45b53e113fc19fb21700",
"assets/assets/images/flags/kp.png": "47341182202d2898ea1771ed7536a522",
"assets/assets/images/flags/kr.png": "69e9c24daea7658706f5fd6b87eeef7c",
"assets/assets/images/flags/kw.png": "27e2298d20bfcfc2821c1c63b45f2044",
"assets/assets/images/flags/ky.png": "38ca156f0baa214c17443add95b12ffc",
"assets/assets/images/flags/kz.png": "cbc4300a73bb1b302db4655ad37cc602",
"assets/assets/images/flags/la.png": "35506f7a24cdeb67a6c5250a3a3da354",
"assets/assets/images/flags/lb.png": "80b5d75143d0008436e9fa592d2b707a",
"assets/assets/images/flags/lc.png": "6b84f5d65073e746e8544d9508cb704d",
"assets/assets/images/flags/li.png": "0fc328ca9b9026922e690e6e39ceff34",
"assets/assets/images/flags/lk.png": "d274d12e9633c0e6d3d3c08cc1cac339",
"assets/assets/images/flags/lr.png": "f064dc1d0fdc8c28b1f3183cdcd05575",
"assets/assets/images/flags/ls.png": "0aa0e5cc8780fc7ce9fdaa7a4605641d",
"assets/assets/images/flags/lt.png": "f3d518fe8b4ae80517b8017a38c7dac5",
"assets/assets/images/flags/lu.png": "88bb90afde243899355dfac6bf1c8557",
"assets/assets/images/flags/lv.png": "5a068389f9e645f42760e7259e5f35a8",
"assets/assets/images/flags/ly.png": "b6fa76551b40037e1ad0c37700756a84",
"assets/assets/images/flags/ma.png": "1e70f3e9d8891691d16d0d60dad23f57",
"assets/assets/images/flags/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/assets/images/flags/md.png": "b55500445ba14cd5e4cd57c30190eef1",
"assets/assets/images/flags/me.png": "c49c485f9d1a35015cfd7b51fc1a8bd8",
"assets/assets/images/flags/mf.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/mg.png": "2c425678005bd4889e96383ffa31672d",
"assets/assets/images/flags/mh.png": "60da070dadb1423c482935923bc85498",
"assets/assets/images/flags/mk.png": "845366a65f0fbcca91792fb273513b5c",
"assets/assets/images/flags/ml.png": "bdb487ee35c34e6a9e78da7a843d138e",
"assets/assets/images/flags/mm.png": "b65acb38ceeff7b263d4ce37fa51178c",
"assets/assets/images/flags/mn.png": "608f771482a4e4c00f63893b8be9d32e",
"assets/assets/images/flags/mo.png": "c985270d4c445910666ba53be359bd7e",
"assets/assets/images/flags/mp.png": "69684008f633e6155656c65f5f1c6eb6",
"assets/assets/images/flags/mq.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/mr.png": "3dc63413ce3eebea8399fcd6839f56b9",
"assets/assets/images/flags/ms.png": "343429b49dc09f97b7a180f7515136df",
"assets/assets/images/flags/mt.png": "59010fac394c17f8dd677929d038532d",
"assets/assets/images/flags/mu.png": "55411e2407e439dffb51aa273a7e122f",
"assets/assets/images/flags/mv.png": "e02f4d1ef7a15baf0bcb4a16b0c62fc4",
"assets/assets/images/flags/mw.png": "409c8c64efc5bbc7af62c689b0ea4e3d",
"assets/assets/images/flags/mx.png": "65faa6a61d5442185d2e7e0805649d91",
"assets/assets/images/flags/my.png": "1fd850bfbc79171b5cad4eb270349a3c",
"assets/assets/images/flags/mz.png": "ad5408256e06d98196a97a6cdae055a1",
"assets/assets/images/flags/na.png": "0bf3ed6b143048db9cc7640f04cf830c",
"assets/assets/images/flags/nc.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/ne.png": "8101f2c59dfbdfb289f8c528ae4fb6c2",
"assets/assets/images/flags/nf.png": "f43eca9663b356b32614cbab2df87827",
"assets/assets/images/flags/ng.png": "28a50249dbeb16fef363b6782a1f1d02",
"assets/assets/images/flags/ni.png": "fc37da8995840288b019e2a80d7589b1",
"assets/assets/images/flags/nl.png": "38fd9188d28349c6a5f7b9890eb45387",
"assets/assets/images/flags/no.png": "db5a5b31751a579e540e928cd7471e5a",
"assets/assets/images/flags/np.png": "0e63c35d7321005f02dc7fc88b732942",
"assets/assets/images/flags/nr.png": "aecce9160acc4d44cc23e1328adb6d00",
"assets/assets/images/flags/nu.png": "56fb448a259a4226cf8bc5f79f5e93ef",
"assets/assets/images/flags/nz.png": "5b9fb03e5a651b909ae266a89cfde5f6",
"assets/assets/images/flags/om.png": "1107ff9b84f14df67995c345a754280e",
"assets/assets/images/flags/pa.png": "6beda6cc3bddce20de06f4b46b02f5ed",
"assets/assets/images/flags/pe.png": "bca7dae1c96f4353329d74ec313a42e2",
"assets/assets/images/flags/pf.png": "0157850f52df3311cb3dc2a7f0a816bb",
"assets/assets/images/flags/pg.png": "b0578d68ae69038a3d988589de6fde49",
"assets/assets/images/flags/ph.png": "81818b8c2166ac6caee2a0126a78568d",
"assets/assets/images/flags/pk.png": "c9ea88e6740dd1ecddb58757a2853cba",
"assets/assets/images/flags/pl.png": "3f27ec4233c9c720ac65fd8de7bc2b01",
"assets/assets/images/flags/pm.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/pn.png": "fd89eec9c44e3831ac39eeecb78ed247",
"assets/assets/images/flags/pr.png": "043dcd90f1d660302aef5d3a6e91296d",
"assets/assets/images/flags/ps.png": "8930794419097642031394b5c551cf5e",
"assets/assets/images/flags/pt.png": "b773a10140b31e5900497fa12f359f65",
"assets/assets/images/flags/pw.png": "0e6de99456790b4246054dd9d25b4541",
"assets/assets/images/flags/py.png": "53dafc776ee22d9eb990d7bd6447f9df",
"assets/assets/images/flags/qa.png": "33ebebd5d06bc293ab928b7fb406a6aa",
"assets/assets/images/flags/re.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/ro.png": "51e670b3c26227fe6d14b5299ada1be3",
"assets/assets/images/flags/rs.png": "381665514b77cfddbcb01e2868494a5b",
"assets/assets/images/flags/ru.png": "5ca618ac4212da9b6b7bb0311988b0d7",
"assets/assets/images/flags/rw.png": "1984d86c28e96700839230b56c39853f",
"assets/assets/images/flags/sa.png": "c290ae837af3d2d1343aaf1bcacfca4f",
"assets/assets/images/flags/sb.png": "d2a0fc80e54a7b86c7f837ee65ee58ec",
"assets/assets/images/flags/sc.png": "791e0b81be4c9d3f4b2a474bfc9621a2",
"assets/assets/images/flags/sd.png": "0f964ada98d4186b8cc1084f51b7ff5e",
"assets/assets/images/flags/se.png": "f2e9163df168cce06b958c8349b371ad",
"assets/assets/images/flags/sg.png": "d75e0f75bbc94b7f90f7a0888939aa05",
"assets/assets/images/flags/sh.png": "9775a38c2beb3ce20dc55c0a83a1405a",
"assets/assets/images/flags/si.png": "1c1ea6ccfa7ca77ba46d9982337de644",
"assets/assets/images/flags/sj.png": "db5a5b31751a579e540e928cd7471e5a",
"assets/assets/images/flags/sk.png": "434c8412667047cfa37915b33b0d3883",
"assets/assets/images/flags/sl.png": "d54977c8c8828889dca64237f577efd3",
"assets/assets/images/flags/sm.png": "a9b950e4aa1c66b3c5a22c51a90d5204",
"assets/assets/images/flags/sn.png": "b696a8b9e5150d0f4db26a33ecb6cf6a",
"assets/assets/images/flags/so.png": "b8500a56fde46f47d009906c4db0f5fa",
"assets/assets/images/flags/sr.png": "d8572f1a34dff93c2c8aab7718d244bc",
"assets/assets/images/flags/ss.png": "71ee623cd39ea6127e3ebdf008f42dee",
"assets/assets/images/flags/st.png": "cc3447d631f34a63af464526ba0a2035",
"assets/assets/images/flags/sv.png": "481998732bc6011da696f369ad9bf2c4",
"assets/assets/images/flags/sx.png": "989932f1db170805844f73a45c94db0c",
"assets/assets/images/flags/sy.png": "86639639cfc967aa588d02192beddcd2",
"assets/assets/images/flags/sz.png": "f0b3ab7bde55adb698e0735048e36649",
"assets/assets/images/flags/tc.png": "46a0c181c7b69de0e8e41db8d0ad20ef",
"assets/assets/images/flags/td.png": "73ac1fc8f48406d0b12cff062c6c8d40",
"assets/assets/images/flags/tf.png": "a63ee135e5b73cb55b2664d8e649639e",
"assets/assets/images/flags/tg.png": "15d172efdb3a8693056493088c13cce9",
"assets/assets/images/flags/th.png": "dce208f04cc9aa82fceef8b64b59bfc2",
"assets/assets/images/flags/tj.png": "dbe5d1bf894958b12747177c4097560d",
"assets/assets/images/flags/tk.png": "eba8cf11217fbb48b396e4e3ae7a37c8",
"assets/assets/images/flags/tl.png": "8dfea1dc590ddbc29e3f310bf2401a59",
"assets/assets/images/flags/tm.png": "ac91702b1f933ee67fb24d2e11a7f276",
"assets/assets/images/flags/tn.png": "78ac3d99ef587d80b7ce369e29cd9c69",
"assets/assets/images/flags/to.png": "441af2d52e5c00c41ef7ce8826b63c29",
"assets/assets/images/flags/tr.png": "2a9dc126504dfdff683b045d037c90a1",
"assets/assets/images/flags/tt.png": "97773b62613e47905a1edbb1c849b172",
"assets/assets/images/flags/tv.png": "69a03d62ce4edd4089beff7af3f02eb7",
"assets/assets/images/flags/tw.png": "4c0b1e6548588aa2bda4e7801abf4322",
"assets/assets/images/flags/tz.png": "efa3dcd8d303dd9635aba745bc3757e1",
"assets/assets/images/flags/ua.png": "dccbe014862c2cebb44bb641a2f78c79",
"assets/assets/images/flags/ug.png": "379ee9a1c1829d2889f70ac68aae4380",
"assets/assets/images/flags/um.png": "3ea59e1bc692d35e5f94771234a50219",
"assets/assets/images/flags/us.png": "3ea59e1bc692d35e5f94771234a50219",
"assets/assets/images/flags/uy.png": "5d8717a7e0d856f144774c5f70d403b8",
"assets/assets/images/flags/uz.png": "3229a800e146ec40aa07f805a1fb51b4",
"assets/assets/images/flags/va.png": "39509252e6ae5df7e14f5d497c96b700",
"assets/assets/images/flags/vc.png": "f843b5175b9be9d9cabef15479450e59",
"assets/assets/images/flags/ve.png": "67741771309f4957731a0498d9ada274",
"assets/assets/images/flags/vg.png": "5dd3ff009f0f9e2fa37fab0854cb4a33",
"assets/assets/images/flags/vi.png": "f74c8a433cc21c34a4d4182c7695a5e6",
"assets/assets/images/flags/vn.png": "69f13da324016eff0b914727ca6a37e0",
"assets/assets/images/flags/vu.png": "ba7f7c31b9d32313962ed41764e13c0d",
"assets/assets/images/flags/wf.png": "ad4ab8aa04a3381244b1bb4128594142",
"assets/assets/images/flags/ws.png": "9995a8f1a5851934a47cb2f22209caba",
"assets/assets/images/flags/xk.png": "07d1fee4dd57ab543560a514eb66d6cc",
"assets/assets/images/flags/ye.png": "fb7c1a62c9f84040a106e3bfd4cec688",
"assets/assets/images/flags/yt.png": "20a18451ae73a8ccc3dae400e71ddb98",
"assets/assets/images/flags/za.png": "cb31d65097dc208dd7d4f39d8df27695",
"assets/assets/images/flags/zm.png": "4b5fc8e69b3959fe8451806ec2701ff9",
"assets/assets/images/flags/zw.png": "2e86b518e71564ef776e2b05ebb73cb0",
"assets/assets/images/png/404.png": "9b1076b28f87e02819cbdb12b2ce9ea8",
"assets/assets/images/png/finance.png": "00d02c0a79e898a3443da890ae46c6d1",
"assets/assets/images/png/google.png": "6ec9f84c65fadc3e597b00725cf2bd9b",
"assets/assets/images/png/logo.png": "b38985f9646045380da3c157634a161a",
"assets/assets/images/png/saving.png": "535621f10b160e52c50dff3b31cec29e",
"assets/assets/images/png/welcoming.png": "eacd65a4ee7ff239edbbb584cc117f75",
"assets/assets/json/applepay.json": "0b9c29778724db26eaa71adb9a41c7ef",
"assets/assets/json/gpay.json": "5cde7e508e989bebddbdf134fe06898a",
"assets/assets/lang/en.json": "7f44402fde80fdf8c5a6f34a52f02759",
"assets/assets/lang/vi.json": "8a7697129fd77f67fb0c6674ee4f7c16",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "dd920a8b60c05bd2a8d7cd99ea6dd019",
"assets/NOTICES": "c42b8a9eed5b89451e3a74c352533f0e",
"assets/packages/pay_platform_interface/pubspec.yaml": "576a151a92ea9fc3da773ad9e9b4864b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "fc69dc0b287f64be73e3b57fae5f883a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7cfeb7d5407ecf404836ed8aacc72aee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f60fce55907bdb705883efbf85ee5c7",
"/": "8f60fce55907bdb705883efbf85ee5c7",
"main.dart.js": "56f3ff0483168ea091fb94a7de2c1daa",
"manifest.json": "9fa469e1d5062a8523ad039d66a210d6",
"splash/img/dark-1x.png": "2fa58a682223590f8f259b970088036d",
"splash/img/light-1x.png": "2fa58a682223590f8f259b970088036d",
"sqflite_sw.js": "6229315771093782ca5126f33df0965c",
"sqlite3.wasm": "fe0b5f7d20d0d900508725319188a9a8",
"version.json": "b8aecf4f2373f0f9cb84e3b6a7e36925"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
