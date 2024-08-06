---
date: 2022-06-16
category:
  - node
tag:
  - npm
---

# npm request api

[npm](https://github.com/npm/registry/tree/master/docs)

## point

`GET https://api.npmjs.org/downloads/point/{period}[/{package}]`

```js
{
  downloads: 31623,
  start: "2014-01-01",
  end: "2014-01-31",
  package: "jquery"
}
```

* All packages, last day:
  - /downloads/point/last-day
* All packages, specific date:
  - /downloads/point/2014-02-01
* Package "express", last week:
  - /downloads/point/last-week/express
* Package "express", given 7-day period:
  - /downloads/point/2014-02-01:2014-02-08/express
* Package "@slack/client", last 30 days:
  - /downloads/point/last-month/@slack/client
* Package "jquery", specific month:
  - /downloads/point/2014-01-01:2014-01-31/jquery

## range

`GET https://api.npmjs.org/downloads/range/{period}[/{package}]`

```js
{
	downloads: [
		{
			day: "2014-02-27",
			downloads: 1904088
		},
		{
			day: "2014-03-04",
			downloads: 7904294
		}
	],
	start: "2014-02-25",
	end: "2014-03-04",
	package: "somepackage"
}
```

* Downloads per day, last 7 days
  - /downloads/range/last-week
* Downloads per day, specific 7 days
  - /downloads/range/2014-02-07:2014-02-14
* Downloads per day, last 30 days
  - /downloads/range/last-month/jquery
* Downloads per day, specific 30 day period
  - /downloads/range/2014-01-03:2014-02-03/jquery

## 批量查询

* Packages "npm", "express", last day:
/downloads/point/last-day/npm,express

## 不同版本号下载量

`GET https://api.npmjs.org/versions/{package}/last-week`

## 搜索

`GET https://registry.npmjs.org/-/v1/search?text=yargs`

| Name | Value | Kind | Required? | Notes |
| --- | --- | --- | --- | --- |
| text | String | **Query** | ❌ | full-text search to apply |
| size | integer | **Query** | ❌ | how many results should be returned (default 20, max 250) |
| from | integer | **Query** | ❌ | offset to return results from |
| quality | float | **Query** | ❌ | how much of an effect should quality have on search results |
| popularity | float | **Query** | ❌ | how much of an effect should popularity have on search results |
| maintenance | float | **Query** | ❌ | how much of an effect should maintenance have on search results |

[special](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md)

## 包/版本信息

`GET https://registry.npmjs.org/{package}/{version}`

| Name | Value | Kind | Required? | Notes |
| --- | --- | --- | --- | --- |
| package | String | **Path** | ✅ | the name of the package |
| version | String | **Path** | ✅ | a version number or `latest` |

## Limits

* 批量查询一次最多只能处理128个包和最多365天的数据。
* 仅限于最多18个月的数据。返回数据的最早日期是2015年1月10日
