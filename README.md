json-attributed-string
======================

JSON Attributed String 	A simple utility used to create JSON objects designed to work with [NSMutableAttributedString+JSON](https://github.com/iksnae/NSMutableAttributedString_JSON) objective-c category.


Supported Attributes:
```objective-c
NSFontAttributeName
NSParagraphStyleAttributeName
NSForegroundColorAttributeName
NSBackgroundColorAttributeName
NSLigatureAttributeName
NSStrokeColorAttributeName
NSStrokeWidthAttributeName
NSShadowAttributeName
NSAttachmentAttributeName
NSLinkAttribute
NSUnderlineStyleAttributeName
NSUnderlineColorAttributeName
NSStrikethroughColorAttributeName
NSStrikethroughStyleAttributeName
NSObliquenessAttributeName
NSExpansionAttributeName
NSWritingDirectionAttributeName
NSVerticalGlyphFormAttributeName
```

Usage
--------------
```javascript
var jsonas = require("json-attributed-string");
var fs = require("fs");


// test attributed string
var test_att_string = new jsonas.AttributedString("The quick brown fox jumps over the lazy dog. Wafting zephyrs quickly vexed Jumbo. Jackdaws love my big sphinx of quartz.The quick brown fox jumps over the lazy dog. Wafting zephyrs quickly vexed Jumbo. Jackdaws love my big sphinx of quartz. ");

// test attribute #1 ( set font for half of the text )
var attrib1 = jsonas.createFontAttribute("Arial",30);
attrib1.setRangeLength(test_att_string.length()*0.5);

// test attribute #2 ( set forground color )
var attrib2 = jsonas.createForegroundColorAttribute("0xff0000");
attrib2.setRangeStartIndex(10);
attrib2.setRangeLength(10);

// test attribute #3 ( set bacground color )
var attrib3 = jsonas.createBackgroundColorAttribute("0x00ff00");
attrib3.setRangeStartIndex(5);
attrib3.setRangeLength(25);

// test attribute #4 ( set alignment to right  with paragraph style )
var attrib4 = jsonas.createParagraphStyleAttribute();
attrib4.alignment = "Right";
attrib4.setRangeLength(test_att_string.length());

// test attribute #5 ( add link )
var attrib5 = jsonas.createLinkAttribute("http://google.com");
attrib5.setRangeStartIndex(50);
attrib5.setRangeLength(16);

// test attribute #6 ( set font size on link range )
var attrib6 = jsonas.createFontAttribute("Arial",10);
attrib6.range = attrib5.range;

// test attribute #7 ( add shadow )
var attrib7 = jsonas.createShadowAttribute();
attrib7.setRangeStartIndex(80);
attrib7.setRangeLength(20);

// test attribute #8 ( add shadow )
var attrib8 = jsonas.createStrokeColorAttribute("0xff0000");
attrib8.setRangeStartIndex(100);
attrib8.setRangeLength(10);

// test attribute #9 ( set stroke color )
var attrib9 = jsonas.createStrokeWidthAttribute(2);
attrib9.range = attrib8.range;

// test attribute #10 ( set ligatures )
var attrib10 = jsonas.createLigatureAttribute();
attrib10.range = attrib1.range;

// test attribute #11 ( add image )
var img_url = "http://www.scientificamerican.com/media/inline/steve-jobs-legacy_1_thumb.jpg";
var attrib11 = jsonas.createAttachmentAttribute(img_url);
attrib11.setRangeStartIndex(4);


var attributes_array = [ attrib1, attrib2, attrib3, attrib4, attrib5, attrib6, attrib7, attrib8, attrib9 ];

// add attributes to attributed string
test_att_string.addAttributes(attributes_array);

// write example.json file
fs.writeFile('example.json', JSON.stringify(test_att_string,undefined,4), function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});


```


Executing the code above generates the JSON below.


```json
{
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo.",
    "attributes": [
        {
            "name": "Font",
            "value": 0,
            "range": {
                "startIndex": 0,
                "length": 62
            },
            "fontName": "Helvetica",
            "fontSize": 30
        },
        {
            "name": "ForegroundColor",
            "value": "0xffcc00",
            "range": {
                "startIndex": 10,
                "length": 10
            }
        },
        null,
        {
            "name": "ParagraphStyle",
            "value": "Custom",
            "range": {
                "startIndex": 0,
                "length": 124
            },
            "alignment": 0,
            "firstLineHeadIndent": 0,
            "headIndent": 0,
            "tailIndent": 0,
            "lineHeightMultiple": 0,
            "maximumLineHeight": 0,
            "minimumLineHeight": 0,
            "paragraphSpacing": 0,
            "paragraphSpacingBefore": 0
        },
        {
            "name": "Link",
            "value": "http://google.com",
            "range": {
                "startIndex": 50,
                "length": 16
            }
        },
        {
            "name": "Shadow",
            "value": "Custom",
            "range": {
                "startIndex": 80,
                "length": 20
            },
            "color": "0x000000",
            "offset": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "StrokeColor",
            "value": "0xff0000",
            "range": {
                "startIndex": 100,
                "length": 10
            }
        },
        {
            "name": "StrokeWidth",
            "value": 20,
            "range": {
                "startIndex": 100,
                "length": 10
            }
        },
        {
            "name": "Ligature",
            "value": 1,
            "range": {
                "startIndex": 0,
                "length": 62
            }
        },
        {
            "name": "Attachment",
            "value": "http://www.scientificamerican.com/media/inline/steve-jobs-legacy_1_thumb.jpg",
            "range": {
                "startIndex": 0,
                "length": 10
            }
        },
        {
            "name": "UnderlineStyle",
            "value": 0,
            "range": {
                "startIndex": 4,
                "length": 0
            }
        }
    ]
}
```
