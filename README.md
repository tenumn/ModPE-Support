# ModPE模组兼容 - ModPE Support

本模组是主要为 *Factorization* 在 *Horizon* 上运行而开发的框架, \
This mod is a framework developed mainly for *Factorization* to run on *Horizon*,

目前处在开发期如果你想加入开发*ModPE Support*的团队中,\
Currently in the development stage, if you want to join the team developing *ModPE Support*,

请遵循以下规则: \
please follow the following rules:

    1.不要添加不存在于ModPE的算法.
    1.Do not add api that are not defined in ModPE.

    2.不要添加lib和资源文件.
    2.Do not add lib and resource files.

### 使用ModPE模组兼容 - Use ModPE Support

    1.寻找一个需要兼容的ModPE模组.
    1.Find a ModPE Mod that needs to be compatible.

    2.修改方块和物品IDs, 确保不会和原版IDs冲突.
    2.Modify block ids and item ids, ensure that new IDS does not conflict with vanilla ids.

    3.Add and modify build.config 和 launcher.js 文件到模组文件夹内.
    3.Add and modify build.config and launcher.js file to mod folder.

### build.config
    {
        "defaultConfig": {
            "api": "CoreEngine",
            "buildType": "develop"
        },
        "compile": [
            {
                "path": "modpe-support.js",
                "sourceType": "mod"
            },
            {
                "path": "launcher.js",
                "sourceType": "launcher"
            }
        ],
        "resources": [
	        {
                "path": "resources",
                "resourceType": "resource"
            }
	    ]
    }