
var online_context = "http://asjsonld.mybluemix.net";
var offline_context = "";
var context = online_context;

var examples = [
  {
    "@context": context,
    "@type": "as:Activity",
    actor: "acct:sally@example.org",
    verb: "post",
    object: "urn:example:posts:1"
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: "acct:sally@example.org",
    verb: "post",
    object: "urn:example:posts:1"
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: {
      "@id": "acct:sally@example.org",
      "displayName": "Sally",
      "url": "http://profiles.example.org/sally",
      "image": {
        "@type": "as:Link",
        "@id": "http//example.org/sally.png",
        "mediaType": "image/png"
      }
    },
    verb: "post",
    object: "urn:example:posts:1"
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: [
      {
        "@id": "acct:sally@example.org",
        "displayName": "Sally",
        "url": "http://profiles.example.org/sally"
      },
      {
        "@id": "acct:joe@example.org",
        "displayName": "Joe",
        "url": "http://profiles.example.org/joe"
      }
    ],
    verb: "post",
    object: "urn:example:posts:1"
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: {
      "@id": "acct:sally@example.org",
      "displayName": "Sally",
      "url": "http://profiles.example.org/sally"
    },
    verb: "post",
    object: {
      "@id": "urn:example:posts:1",
      "@type": "urn:example:BlogPost",
      "displayName": "This is a blog post",
      "url": "http://example.org/posts/1"
    }
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: {
      "@id": "acct:sally@example.org",
      "displayName": "Sally",
      "url": "http://profiles.example.org/sally"
    },
    verb: "post",
    object: {
      "@id": "http://example.org/posts/1",
      "@type": "as:Link",
      "displayName": "This is a blog post"
    }
  },
  {
    "@context": [context, { "post": "as1:post" }],
    "@type": "as:Activity",
    actor: {
      "@id": "acct:sally@example.org",
      "displayName": "Sally",
      "url": "http://profiles.example.org/sally"
    },
    verb: "post",
    object: {
      "@id": "http://example.org/posts/1",
      "@type": ["as:Link", "urn:types:BlogPost"],
      "displayName": "This is a blog post"
    }
  },
  {
    "@context": context,
    "@type": "vcard:Individual",
    "@id": "acct:sally@example.org",
    "displayName": "Sally",
    "vcard:fn": "Sally Jones",
    "vcard:nickname": "Sally",
    "vcard:hasEmail": "sally@example.org",
    "vcard:hasAddress": {
      "@context": {
        "@vocab": "http://www.w3.org/2006/vcard/ns#"
      },
      "@type": "Home",
      "country-name": "United States",
      "locality": "Smalltown",
      "postal-code": "11111",
      "street-address": "111 First Street"
    },
    "published": "2014-10-25T12:34:56Z",
    "updated": "2014-10-25T12:34:56Z",

  },
  {
    "@context": context,
    "@type": "as:Collection",
    itemsPerPage: 1,
    totalItems: 10,
    startIndex: 0,
    next: "http://example.org/foo/next-page",
    items: [
      {
        "@type": "as:Activity",
        actor: "acct:hulk@example.org",
        verb: "http://example.org/verbs/smash",
        object: "acct:badguy@example.org"
      }
    ]
  },
  {
    "@context": context,
    "@type": "http://example.org/Place",
    "location": {
      "@type": "geo:Point",
      "geo:lat": "40.75",
      "geo:long": "73.98"
    },
    "displayName": "Empire State Building"
  },
  {
    "@context": context,
    "@type": "http://example.org/Place",
    "location": {
      "@type": "geos:wktLiteral",
      "@value": "Point(40.75 73.98)"
    },
    "displayName": "Empire State Building"
  },
  {
    "@context": context,
    "@type": "http://example.org/Offer",
    "displayName": "An Offer",
    "validFrom": "2014-10-20T12:00:00Z",
    "validUntil": "2014-10-25T12:34:56Z"
  },
  {
    "@context": context,
    "@type": "http://example.org/Note",
    "displayName": "A Simple Note",
    "attachment": [
      {
        "@type": "http://example.org/Note",
        "content": "An attached note"
      },
      "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D"
    ],
    "tag": "acct:sally@example.org"
  },
  {
    "@context": context,
    "@type": "as:Link",
    "@id": "http://example.org/foo.html",
    "mediaType": "text/html",
    "rel": "alternate"
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "language": "en",
    "displayName": "This is a thing"
  },
  {
    "@context": [context, {"@language":"en"}],
    "@type": "http://example.org/Thing",
    "displayName": "This is a thing"
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "language": "en",
    "displayName": {
      "en": "This is a thing",
      "fr": "C'est une chose"
    }
  },
  {
    "@context": [context, {
      "displayName_en": {
        "@id": "as:displayName",
        "@language": "en"
      },
      "displayName_fr": {
        "@id": "as:displayName",
        "@language": "fr"
      }
    }],
    "@type": "http://example.org/Thing",
    "displayName_en": "This is a thing",
    "displayName_fr": "C'est une chose"
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "displayName": "A Thing",
    "action": {
      "@type": "http://example.org/ShareAction",
      "displayName": "Share This",
      "using": {
        "@type": "as:HttpRequest",
        "method": "GET",
        "url": "http://example.org/target-url"
      }
    }
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "displayName": "A Thing",
    "action": {
      "@type": "http://example.org/ShareAction",
      "displayName": "Share This",
      "using": {
        "@type": "as:BrowserView",
        "method": "GET",
        "browserContext": "_new",
        "url": "http://example.org/target-url"
      }
    }
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "displayName": "A Thing",
    "action": {
      "@type": "http://example.org/ShareAction",
      "displayName": "Share This",
      "using": {
        "@type": "as:EmbeddedView",
        "mediaType": "text/html",
        "content": "<div>Some embedded HTML</div>"
      }
    }
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "displayName": "A Thing",
    "action": {
      "@type": "http://example.org/ShareAction",
      "displayName": "Share This",
      "using": [
        {
          "@type": "as:BrowserView",
          "url": "http://example.org/share-service"
        },
        {
          "@type": "as:HttpRequest",
          "method": "POST",
          "url": "http://api.example.org/share-service?id=123",
          "potentialResult": {
            "@type": "as:Payload",
            "mediaType": "application/ld+json"
          }
        },
        "android-app://com.example/share-service?id=123",
        {
          "@type": ["as:Intent", "http://example.org/SoftwareApplication"],
          "@id": "urn:app:1234567890",
          "displayName": "iPhone and iPad App",
          "operatingSystem": "iOS"
        },
        {
          "@type": ["as:Intent", "http://example.org/SoftwareApplication"],
          "@id": "urn:app:0987654321",
          "displayName": "Windows Phone App",
          "operatingSystem": "Windows Phone 8"
        }
      ]
    }
  },
  {
    "@context": context,
    "@type": "http://example.org/Thing",
    "displayName": "A Thing",
    "action": [
      {
        "@type": "http://example.org/ShareAction",
        "displayName": "Share This",
        "using": {
          "@type": "as:HttpRequest",
          "method": "GET",
          "url": "http://example.org/target-url"
        }
      },
      {
        "@type": "http://example.org/LikeAction",
        "displayName": "Like This",
        "using": {
          "@type": "as:HttpRequest",
          "method": "GET",
          "url": "http://example.org/target-url"
        }
      }
    ]
  }
];
