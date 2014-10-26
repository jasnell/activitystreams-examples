
var offline_context = [{
     "dc": "http://purl.org/dc/elements/1.1/",
     "dct": "http://purl.org/dc/terms/",
     "dctypes": "http://purl.org/dc/dcmitype/",
     "foaf": "http://xmlns.com/foaf/0.1/",
     "vcard": "http://www.w3.org/2006/vcard/ns#",
     "org": "http://www.w3.org/ns/org#",
     "prov": "http://www.w3.org/ns/prov#",
     "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
     "geos": "http://www.opengis.net/ont/geosparql#",
     "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
     "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
     "owl": "http://www.w3.org/2002/07/owl#",
     "skos": "http://www.w3.org/2004/02/skos/core#"
   },{
   "@vocab": "_:",
   "as" : "http://activitystrea.ms/2.0/",
   "as1" : "http://activitystrea.ms/1.0/",
   "id": "@id",
   "objectType": "@type",
   "language": "as:language",
   "displayName": {
     "@id": "as:displayName",
     "@container": "@language"
   },
   "rel": "as:rel",
   "mediaType": "as:mediaType",
   "verb": {
     "@id": "as:verb",
     "@type": "@vocab"
   },
   "actor": {
     "@id": "as:actor",
     "@type": "@id"
   },
   "actorOf": {
     "@reverse": "as:actor",
     "@type": "@id"
   },
   "object": {
     "@id": "as:object",
     "@type": "@id"
   },
   "objectOf": {
     "@reverse": "as:object",
     "@type": "@id"
   },
   "target": {
     "@id": "as:target",
     "@type": "@id"
   },
   "targetOf": {
     "@reverse": "as:target",
     "@type": "@id"
   },
   "result": {
     "@id": "as:result",
     "@type": "@id"
   },
   "resultOf": {
     "@reverse": "as:result",
     "@type": "@id"
   },
   "instrument": {
     "@id": "as:instrument",
     "@type": "@id"
   },
   "instrumentFor": {
     "@reverse": "as:instrument",
     "@type": "@id"
   },
   "participant": {
     "@id": "as:participant",
     "@type": "@id"
   },
   "participantOf": {
     "@reverse": "as:participant",
     "@type": "@id"
   },
   "priority": {
     "@id": "as:priority",
     "@type": "xsd:float"
   },
   "status": {
     "@id": "as:status",
     "@type": "@vocab"
   },
   "completed": {
     "@id": "as:status/completed"
   },
   "active": {
     "@id": "as:status/active"
   },
   "canceled": {
     "@id": "as:status/canceled"
   },
   "pending": {
     "@id": "as:status/pending"
   },
   "tentative": {
     "@id": "as:status/tentative"
   },
   "to": {
     "@id": "as:to",
     "@type": "@id"
   },
   "bto": {
     "@id": "as:bto",
     "@type": "@id"
   },
   "cc": {
     "@id": "as:cc",
     "@type": "@id"
   },
   "bcc": {
     "@id": "as:bcc",
     "@type": "@id"
   },
   "alias": {
     "@id": "as:alias",
     "@type": "@id"
   },
   "author": {
     "@id": "as:author",
     "@type": "@id"
   },
   "authorOf": {
     "@reverse": "as:author",
     "@type": "@id"
   },
   "content": {
     "@id": "as:content",
     "@container": "@language"
   },
   "icon": {
     "@id": "as:icon",
     "@type": "@id"
   },
   "image": {
     "@id": "as:image",
     "@type": "@id"
   },
   "location": {
     "@id": "as:location",
     "@type": "@id"
   },
   "locationOf": {
     "@reverse": "as:location",
     "@type": "@id"
   },
   "published": {
     "@id": "as:published",
     "@type": "xsd:dateTime"
   },
   "generator": {
     "@id": "as:generator",
     "@type": "@id"
   },
   "generatorOf": {
     "@reverse": "as:generator",
     "@type": "@id"
   },
   "provider": {
     "@id": "as:provider",
     "@type": "@id"
   },
   "providerOf": {
     "@reverse": "as:provider",
     "@type": "@id"
   },
   "summary": {
     "@id": "as:summary",
     "@container": "@language"
   },
   "updated": {
     "@id": "as:updated",
     "@type": "xsd:dateTime"
   },
   "startTime": {
     "@id": "as:startTime",
     "@type": "xsd:dateTime"
   },
   "endTime": {
     "@id": "as:endTime",
     "@type": "xsd:dateTime"
   },
   "validFrom": {
     "@id": "as:validFrom",
     "@type": "xsd:dateTime"
   },
   "validUntil": {
     "@id": "as:validUntil",
     "@type": "xsd:dateTime"
   },
   "validAfter": {
     "@id": "as:validAfter",
     "@type": "xsd:dateTime"
   },
   "validBefore": {
     "@id": "as:validBefore",
     "@type": "xsd:dateTime"
   },
   "rating": {
     "@id": "as:rating",
     "@type": "xsd:float"
   },
   "tag": {
     "@id": "as:tag",
     "@type": "@id"
   },
   "attachment": {
     "@id": "as:attachment",
     "@type": "@id"
   },
   "title": {
     "@id": "as:title",
     "@container": "@language"
   },
   "duration": {
     "@id": "as:duration"
   },
   "height": {
     "@id": "as:height",
     "@type": "xsd:nonNegativeInteger"
   },
   "width": {
     "@id": "as:width",
     "@type": "xsd:nonNegativeInteger"
   },
   "inReplyTo": {
     "@id": "as:inReplyTo",
     "@type": "@id"
   },
   "action": {
     "@reverse": "as:object",
     "@type": "@id"
   },
   "using": {
      "@reverse": "as:handlerFor",
      "@type": "@id"
   },
   "handlerFor": {
     "@id": "as:handlerFor",
     "@type": "@id"
   },
   "scope": {
     "@id": "as:scope",
     "@type": "@id"
   },
   "totalItems": {
     "@id": "as:totalItems",
     "@type": "xsd:nonNegativeInteger"
   },
   "itemsPerPage": {
     "@id": "as:itemsPerPage",
     "@type": "xsd:nonNegativeInteger"
   },
   "startIndex": {
     "@id": "as:startIndex",
     "@type": "xsd:nonNegativeInteger"
   },
   "items": {
     "@reverse": "as:memberOf",
     "@type": "@id"
   },
   "itemsAfter": {
     "@id": "as:itemsAfter",
     "@type": "xsd:dateTime"
   },
   "itemsBefore": {
     "@id": "as:itemsBefore",
     "@type": "xsd:dateTime"
   },
   "first": {
     "@id": "as:first",
     "@type": "@id"
   },
   "last": {
     "@id": "as:last",
     "@type": "@id"
   },
   "prev": {
     "@id": "as:prev",
     "@type": "@id"
   },
   "previous": {
     "@id": "as:prev",
     "@type": "@id"
   },
   "next": {
     "@id": "as:next",
     "@type": "@id"
   },
   "current": {
     "@id": "as:current",
     "@type": "@id"
   },
   "self": {
     "@id": "as:self",
     "@type": "@id"
   },
   "replies": {
     "@id": "as:replies",
     "@container": "@index"
   },
   "url": {
     "@id": "as:url",
     "@type": "@id"
   },
   "attachments": {
     "@id": "as1:attachments",
     "@type": "@id"
   },
   "tags": {
     "@id": "as1:tags",
     "@type": "@id"
   },
   "downstreamDuplicates": {
     "@id": "as1:downstreamDuplicates",
     "@type": "@id"
   },
   "upstreamDuplicates": {
     "@id": "as1:upstreamDuplicates",
     "@type": "@id"
   },
   "confirm": {
     "@id": "as:confirm",
     "@type": "xsd:boolean"
   },
   "requires": {
     "@id": "as:requires",
     "@type": "@id"
   },
   "prefers": {
     "@id": "as:prefers",
     "@type": "@id"
   },
   "method": {
     "@id": "as:method",
     "@type": "xsd:string"
   },
   "expects": {
     "@id": "as:expects",
     "@type": "@id"
   },
   "browserContext": {
     "@id": "as:browserContext",
     "@type": "xsd:string"
   },
   "sandbox": {
     "@id": "as:sandbox",
     "@type": "xsd:string"
   },
   "parameter": {
     "@id": "as:parameter",
     "@type": "as:Parameter"
   },
   "name": {
     "@id": "as:name",
     "@type": "xsd:string"
   },
   "required": {
     "@id": "as:required",
     "@type": "xsd:boolean"
   },
   "repeated": {
     "@id": "as:repeated",
     "@type": "xsd:boolean"
   },
   "value": {
     "@id": "as:value",
     "@type": "xsd:anyType"
   },
   "default": {
     "@id": "as:default",
     "@type": "xsd:anyType"
   },
   "enumeration": {
     "@id": "as:enumeration",
     "@type": "xsd:anyType"
   },
   "minLength": {
     "@id": "as:minLength",
     "@type": "xsd:nonNegativeInteger"
   },
   "maxLength": {
     "@id": "as:maxLength",
     "@type": "xsd:nonNegativeInteger"
   },
   "maxInclusive": {
     "@id": "as:maxInclusive",
     "@type": "xsd:anyType"
   },
   "minInclusive": {
     "@id": "as:minInclusive",
     "@type": "xsd:anyType"
   },
   "maxExclusive" : {
     "@id": "as:maxExclusive",
     "@type": "xsd:anyType"
   },
   "minExclusive": {
     "@id": "as:minExclusive",
     "@type": "xsd:anyType"
   },
   "step": {
     "@id": "as:step",
     "@type": "xsd:nonNegativeInteger"
   },
   "totalDigits": {
     "@id": "as:totalDigits",
     "@type": "xsd:nonNegativeInteger"
   },
   "fractionDigits": {
     "@id": "as:fractionDigits",
     "@type": "xsd:nonNegativeInteger"
   },
   "pattern": {
     "@id": "as:pattern",
     "@type": "xsd:string"
   },
   "placeholder": {
     "@id": "as:placeholder",
     "@type": "xsd:string"
   },
   "potentialResult": {
     "@id": "as:potentialResult",
     "@type": "@id"
   },
   "returns": {
     "@id": "as:returns",
     "@type": "@id"
   },
   "Header": "as:Header",
   "Parameter": "as:Parameter",
   "HtmlForm": "as:HtmlForm",
   "UrlTemplate": "as:UrlTemplate",
   "Auth": "as:Auth",
   "Payload": "as:Payload",
   "PotentialActionHandlerInput": "as:PotentialActionHandlerInput",
   "Intent": "as:Intent",
   "EmbeddedView": "as:EmbeddedView",
   "BrowserView": "as:BrowserView",
   "HttpRequest": "as:HttpRequest"
  },
 {
   "asd": "http://activitystrea.ms/2.0/schema/",
   "asd:defines": {
     "@reverse": "rdfs:isDefinedBy"
   },
   "rdfs:domain": {
    "@type": "@id"
   },
   "rdfs:range": { 
    "@type": "@id"
   },
   "rdfs:subClassOf": {
     "@type": "@id"
   },
   "owl:unionOf": {
     "@type": "@id"
   },
   "owl:oneOf": {
     "@type": "@id"
   },
   "owl:equivalentProperty": {
     "@type": "@id"
   },
   "owl:inverseOf": {
     "@type": "@id"
   }
 }];