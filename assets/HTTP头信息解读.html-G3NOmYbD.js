const e=JSON.parse('{"key":"v-490b8582","path":"/web/HTTP/HTTP%E5%A4%B4%E4%BF%A1%E6%81%AF%E8%A7%A3%E8%AF%BB.html","title":"HTTP头信息解读","lang":"zh-CN","frontmatter":{"date":"2022-06-07T00:00:00.000Z","category":["web"],"tag":["http"],"description":"HTTP的头域包括通用头、请求头、响应头和实体头四个部分。每个头域由一个域名，冒号（:）和域值三部分组成。 通用头部是客户端和服务器都可以使用的头部，可以在客户端、服务器和其他应用程序之间提供一些非常有用的通用功能，如Date头部。 请求头部是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如Accept头部。 响应头...","head":[["meta",{"property":"og:url","content":"https://github.com/utaware/web/HTTP/HTTP%E5%A4%B4%E4%BF%A1%E6%81%AF%E8%A7%A3%E8%AF%BB.html"}],["meta",{"property":"og:site_name","content":"utaware"}],["meta",{"property":"og:title","content":"HTTP头信息解读"}],["meta",{"property":"og:description","content":"HTTP的头域包括通用头、请求头、响应头和实体头四个部分。每个头域由一个域名，冒号（:）和域值三部分组成。 通用头部是客户端和服务器都可以使用的头部，可以在客户端、服务器和其他应用程序之间提供一些非常有用的通用功能，如Date头部。 请求头部是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如Accept头部。 响应头..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-29T03:27:59.000Z"}],["meta",{"property":"article:author","content":"utaware"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:published_time","content":"2022-06-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-29T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP头信息解读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-29T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"utaware\\",\\"url\\":\\"https://github.com/utaware\\"}]}"]]},"headers":[{"level":2,"title":"HTTP通用头","slug":"http通用头","link":"#http通用头","children":[{"level":3,"title":"1、Cache-Control","slug":"_1、cache-control","link":"#_1、cache-control","children":[]},{"level":3,"title":"2、Pragma","slug":"_2、pragma","link":"#_2、pragma","children":[]},{"level":3,"title":"3、Connection","slug":"_3、connection","link":"#_3、connection","children":[]},{"level":3,"title":"4、Date","slug":"_4、date","link":"#_4、date","children":[]},{"level":3,"title":"5、Transfer-Encoding","slug":"_5、transfer-encoding","link":"#_5、transfer-encoding","children":[]},{"level":3,"title":"6、Upgrade","slug":"_6、upgrade","link":"#_6、upgrade","children":[]},{"level":3,"title":"7、Via","slug":"_7、via","link":"#_7、via","children":[]}]},{"level":2,"title":"HTTP请求头","slug":"http请求头","link":"#http请求头","children":[{"level":3,"title":"8、Accept","slug":"_8、accept","link":"#_8、accept","children":[]},{"level":3,"title":"9、Accept-Charset","slug":"_9、accept-charset","link":"#_9、accept-charset","children":[]},{"level":3,"title":"10、Accept-Encoding","slug":"_10、accept-encoding","link":"#_10、accept-encoding","children":[]},{"level":3,"title":"11、Accept-Language","slug":"_11、accept-language","link":"#_11、accept-language","children":[]},{"level":3,"title":"12、Authorization","slug":"_12、authorization","link":"#_12、authorization","children":[]},{"level":3,"title":"13、If-Match","slug":"_13、if-match","link":"#_13、if-match","children":[]},{"level":3,"title":"14、If-None-Match","slug":"_14、if-none-match","link":"#_14、if-none-match","children":[]},{"level":3,"title":"15、If-Modified-Since","slug":"_15、if-modified-since","link":"#_15、if-modified-since","children":[]},{"level":3,"title":"16、If-Unmodified-Since","slug":"_16、if-unmodified-since","link":"#_16、if-unmodified-since","children":[]},{"level":3,"title":"17、If-Range","slug":"_17、if-range","link":"#_17、if-range","children":[]},{"level":3,"title":"18、Range","slug":"_18、range","link":"#_18、range","children":[]},{"level":3,"title":"19、Proxy-Authenticate","slug":"_19、proxy-authenticate","link":"#_19、proxy-authenticate","children":[]},{"level":3,"title":"20、Proxy-Authorization","slug":"_20、proxy-authorization","link":"#_20、proxy-authorization","children":[]},{"level":3,"title":"21、Host","slug":"_21、host","link":"#_21、host","children":[]},{"level":3,"title":"22、Referer","slug":"_22、referer","link":"#_22、referer","children":[]},{"level":3,"title":"23、User-Agent","slug":"_23、user-agent","link":"#_23、user-agent","children":[]}]},{"level":2,"title":"HTTP响应头","slug":"http响应头","link":"#http响应头","children":[{"level":3,"title":"24、Age","slug":"_24、age","link":"#_24、age","children":[]},{"level":3,"title":"25、Server","slug":"_25、server","link":"#_25、server","children":[]},{"level":3,"title":"26、Accept-Ranges","slug":"_26、accept-ranges","link":"#_26、accept-ranges","children":[]},{"level":3,"title":"27、Vary","slug":"_27、vary","link":"#_27、vary","children":[]}]},{"level":2,"title":"HTTP实体头","slug":"http实体头","link":"#http实体头","children":[{"level":3,"title":"28、Allow","slug":"_28、allow","link":"#_28、allow","children":[]},{"level":3,"title":"29、Location","slug":"_29、location","link":"#_29、location","children":[]},{"level":3,"title":"30、Content-Base","slug":"_30、content-base","link":"#_30、content-base","children":[]},{"level":3,"title":"31、Content-Encoding","slug":"_31、content-encoding","link":"#_31、content-encoding","children":[]},{"level":3,"title":"32、Content-Language","slug":"_32、content-language","link":"#_32、content-language","children":[]},{"level":3,"title":"33、Content-Length","slug":"_33、content-length","link":"#_33、content-length","children":[]},{"level":3,"title":"34、Content-Location","slug":"_34、content-location","link":"#_34、content-location","children":[]},{"level":3,"title":"35、Content-MD5","slug":"_35、content-md5","link":"#_35、content-md5","children":[]},{"level":3,"title":"36、Content-Range","slug":"_36、content-range","link":"#_36、content-range","children":[]},{"level":3,"title":"37、Content-Type","slug":"_37、content-type","link":"#_37、content-type","children":[]},{"level":3,"title":"38、Etag","slug":"_38、etag","link":"#_38、etag","children":[]},{"level":3,"title":"39、Expires","slug":"_39、expires","link":"#_39、expires","children":[]},{"level":3,"title":"40、Last-Modified","slug":"_40、last-modified","link":"#_40、last-modified","children":[]}]}],"git":{"createdTime":1711682879000,"updatedTime":1711682879000,"contributors":[{"name":"utaware","email":"1264051408@qq.com","commits":1}]},"readingTime":{"minutes":12.06,"words":3618},"filePathRelative":"web/HTTP/HTTP头信息解读.md","localizedDate":"2022年6月7日","excerpt":"","autoDesc":true}');export{e as data};
