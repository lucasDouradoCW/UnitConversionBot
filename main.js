function metresToImperial(metres){
    var inches = metres*39.3701;
    if(inches < 12){
        return (" = " + inches.toFixed(2) + " inches\n");
    }
    else if(inches >= 12 && inches < 240){
        var feet = Math.floor(inches/12);
        inches = Math.round(inches - (feet*12));
        if (inches == 12){
            inches = 0;
            feet++;
        }
        if(inches == 0){
            return (" = " + feet + " feet\n");
        }
        else{
            return (" = " + feet + "'" + inches + '"\n');
        }
    }
    else if(inches >= 240 && inches <= 31680){
        var feet = inches/12;
        return (" = " + feet.toFixed(2) + " feet\n");
    }
    else{
        var miles = inches/63360;
        return (" = " + miles.toFixed(2) + " miles\n");
    }
}

function inchesToMetric(inches){
    var centimetres = inches*2.54;
    if(centimetres < 1){
        var millimetres = centimetres*10; 
        return (" = " + millimetres.toFixed(2) + " millimetres\n");
    }
    else if(centimetres >= 1 && centimetres < 100){
        return (" = " + centimetres.toFixed(2) + " centimetres\n");
    }
    else if(centimetres >= 100 && centimetres <= 100000){
        var metres = centimetres/100;
        return (" = " + metres.toFixed(2) + " metres\n");
    }
    else{
        var kilometres = centimetres/100000;
        return (" = " + kilometres.toFixed(2) + " kilometres\n");
    }
}

function gramsToImperial(grams){
    var ounces = grams/28.35;
    if(ounces < 16){ 
        return (" = " + ounces.toFixed(2) + " ounces\n");
    }
    else{
        var pounds = ounces/16;
        return (" = " + pounds.toFixed(2) + " pounds\n");
    }
}

function ouncesToMetric(ounces){
    var grams = ounces*28.35;
    if(grams < 1){
        var milligrams = grams*1000;
        return (" = " + milligrams.toFixed(2) + " milligrams\n");
    }
    else if(grams >= 1 && grams < 1000){
        return (" = " + grams.toFixed(2) + " grams\n");
    }
    else{
        var kilograms = grams/1000;
        return (" = " + kilograms.toFixed(2) + " kilograms\n");
    }
}

function litresToImperial(litres){
    var teaspoons = litres*202.884;
    if(teaspoons < 3){
        return (" = " + teaspoons.toFixed(2) + " teaspoons\n");
    }
    else if(teaspoons >= 3 &&  teaspoons < 12){
        var tablespoons = teaspoons/3;
        return (" = " + tablespoons.toFixed(2) + " tablespoons\n");
    }
    else if(teaspoons >= 12 && teaspoons < 768){
        var cups = teaspoons/48;
        return (" = " + cups.toFixed(2) + " cups\n");
    }
    else{
        var gallons = teaspoons/768;
        return (" = " + gallons.toFixed(2) + " gallons\n");
    }
}

function teaspoonsToMetric(teaspoons){
    var millilitres = teaspoons*4.929;
    if(millilitres < 1000){
        return (" = " + millilitres.toFixed(2) + " millilitres\n");
    }
    else{
        var litres = millilitres/1000;
        return (" = " + litres.toFixed(2) + " litres\n");
    }
}

function celsiusToFahrenheit(celsius){
    var fahrenheit = celsius*1.8 + 32;
    return (" = " + fahrenheit.toFixed(2) + "°F\n");
}

function FahrenheitToCelsius(fahrenheit){
    var celsius = (fahrenheit - 32)*5/9;
    return (" = " + celsius.toFixed(2) + "°C\n");
}

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';

const distanceWords = ["millimetres", "millimetre", "millimeters", "millimeter", "mm", 
"centimetres", "centimetre", "centimeters", "centimeter", "cm", 
"decimetres", "decimetre", "decimeters", "decimeter", 
"metres", "metre", "meters", "meter", "m", 
"decametres", "decametre", "decameters", "decameter", 
"hectometres", "hectometre", "hectometers", "hectometer", "hm", 
"kilometres", "kilometre", "kilometers", "kilometer", "km", 
"inches", "inch", "in", 
"foot", "feet", "ft", 
"yard", "yards", "yd", 
"mile", "miles", "mi"];
const weightWords = ["milligram", "milligrams", "mg",  
"centigram", "centigrams","cg", 
"decigrams", "decigram",  
"grams", "gram", "g", 
"decagrams", "decagram",  
"hectograms", "hectogram", "hg", 
"kilograms", "kilogram", "kg", 
"ounce", "ounces", "oz", 
"pound", "pounds", "lb", "lbs", 
"stone", "stones", "st", 
"fuckload", "fuckloads", 
"shitton", "shittons"];
const volumeWords = ["millilitres", "millilitre", "milliliters", "milliliter", "ml", 
"centilitres", "centilitre", "centiliters", "centiliter", "cl", 
"decilitres", "decilitre", "deciliters", "deciliter", 
"litres", "litre", "liters", "liter", "l", 
"decalitres", "decalitre", "decaliters", "decaliter", 
"hectolitres", "hectolitre", "hectoliters", "hectoliter", "hl", 
"kilolitres", "kilolitre", "kiloliters", "kiloliter", "kl", 
"teaspoon", "teaspoons", "tsp", "tsps", 
"tablespoon", "tablespoons", "tbsp", "tbsps", 
"ounce", "ounces", "oz", "floz", 
"cup", "cups", 
"gallon", "gallons", "gal", "gals", 
"pint", "pints", "pt"];
const temperatureWords = ["celsius", "c", "°c", 
"fahrenheit", "f", "°f", 
"kelvin", "k"];

client.once('ready', () => {
    console.log("Unit Conversion is online!");
});

client.on('message', message => {
if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send("pong!");
    }
    
    if(command === 'convert'){
        if(args.length < 4){
            message.channel.send("Looks like something went wrong! This command should be in the form:\n `?convert [number] [unit] to [unit]`\n Example:\n `?convert 1 mile to metres`");
            return;
        }
        if(isNaN(args[0])){
            message.channel.send("Make sure that the number you want to convert is written using digits from 0 to 9!\nWrite `12`, not `twelve`");
            return;
        }
        if(distanceWords.includes(args[1])){
            if(!distanceWords.includes(args[3])){
                if(weightWords.includes(args[3])){
                    message.channel.send("I can't convert units of distance to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(volumeWords.includes(args[3])){
                    message.channel.send("I can't convert units of distance to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(temperatureWords.includes(args[3])){
                    message.channel.send("I can't convert units of distance to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + args[3] + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }
        }
        else if(weightWords.includes(args[1]) && !((args[1] == "ounce" || args[1] == "ounces" || args[1] == "oz") && volumeWords.includes(args[3]))){
            if(!weightWords.includes(args[3])){
                if(distanceWords.includes(args[3])){
                    message.channel.send("I can't convert units of weight to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(volumeWords.includes(args[3])){
                    message.channel.send("I can't convert units of weight to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(temperatureWords.includes(args[3])){
                    message.channel.send("I can't convert units of weight to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + args[3] + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }
        }
        else if(volumeWords.includes(args[1])){
            if(!volumeWords.includes(args[3])){
                if(weightWords.includes(args[3])){
                    message.channel.send("I can't convert units of volume to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(distanceWords.includes(args[3])){
                    message.channel.send("I can't convert units of volume to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(temperatureWords.includes(args[3])){
                    message.channel.send("I can't convert units of volume to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + args[3] + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }
        }
        else if(temperatureWords.includes(args[1])){
            if(!temperatureWords.includes(args[3])){
                if(weightWords.includes(args[3])){
                    message.channel.send("I can't convert units of temperature to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(volumeWords.includes(args[3])){
                    message.channel.send("I can't convert units of temperature to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                if(distanceWords.includes(args[3])){
                    message.channel.send("I can't convert units of temperature to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + args[3] + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }
        }
        else{
            message.channel.send("Seems like I haven't learned the unit `" + args[1] + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
            return;
        }
    }
});

client.on('message', message => {
    if(message.author.bot || message.content.startsWith(prefix)) return;

    const args = message.content.split(" ");
    const punctuation = /[@.,\/#!?\\$'"%\^&\*;:{}=_`\[\]~()]/g;
    var conversions = 0;
    var output = "";
    for(var i = 0; i < args.length; i++){
        if(i != 0){
            var num = parseFloat(args[i-1].replace(/[@,\/#!"'?\\$%\^&\*;:{}=_`\[\]~()]/g, ""));
        }
        if(isNaN(num) && i != 0){
            var wordNum = args[i-1].toLowerCase().replace(punctuation, "");
            switch(wordNum){
                case "zero":
                    num = 0;
                    break;
                case "one":
                    num = 1;
                    break;
                case "two":
                    num = 2;
                    break;
                case "three":
                    num = 3;
                    break;
                case "four":
                    num = 4;
                    break;
                case "five":
                    num = 5;
                    break;
                case "six":
                    num = 6;
                    break;
                case "seven":
                    num = 7;
                    break;
                case "eight":
                    num = 8;
                    break;
                case "nine":
                    num = 9;
                    break;
                case "ten":
                    num = 10;
                    break;
                case "eleven":
                    num = 11;
                    break;
                case "twelve":
                    num = 12;
                    break;
                case "thirteen":
                    num = 13;
                    break;
                case "fourteen":
                    num = 14;
                    break;
                case "fifteen":
                    num = 15;
                    break;
                case "sixteen":
                    num = 16;
                    break;
                case "seventeen":
                    num = 17;
                    break;
                case "eighteen":
                    num = 18;
                    break;
                case "nineteen":
                    num = 19;
                    break;
                case "twenty":
                    num = 20;
                    break;
                case "half":
                    num = 1/2;
                    break;
                case "third":
                    num = 1/3;
                    break;
                case "quarter":
                    num = 1/4;
                    break;
                default:
            }
        }
        
        var unalteredWord = args[i].toLowerCase().replace(/[@,\/#!"'?\\$%\^&\*;:{}=_`\[\]~()]/g, "");
        var feetInches = args[i].toLowerCase().replace(/[@,\/#!?\\$%\^&\*;:{}=_`\[\]~()]/g, "");
        var word = args[i].toLowerCase().replace(punctuation, '');
        var extraWord = "";
        var letters = word.replace(/[0-9]/g, "").replace(/-/g, "");
        if(i != (args.length - 1)){
            extraWord = args[i+1].toLowerCase().replace(punctuation, '');
        }
        if((word == 'millimetres' || word == 'millimeters' || word == 'mm' || word == 'millimetre' || word == 'millimeter')){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " millimetre" + metresToImperial(num/1000));
                }
                else{
                    output += (num + " millimetres" + metresToImperial(num/1000));
                }
                conversions++;
            }
        }
        else if(word == 'centimetres' || word == 'centimeters' || word == 'cm' || word == 'centimetre' || word == 'centimeter'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " centimetre" + metresToImperial(num/100));
                }
                else{
                    output += (num + " centimetres" + metresToImperial(num/100));
                }
                conversions++;
            }
        }
        else if(word == 'metres' || word == 'meters' || word == 'm' || word == 'metre' || word == 'meter'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " metre" + metresToImperial(num));
                }
                else{
                    output += (num + " metres" + metresToImperial(num));
                }
                conversions++;
            }
        }
        else if(word == 'kilometres' || word == 'kilometers' || word == 'km' || word == 'kilometre' || word == 'kilometer'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " kilometre" + metresToImperial(num*1000));
                }
                else{
                    output += (num + " kilometres" + metresToImperial(num*1000));
                }
                conversions++;
            }
        }
        else if(word == 'inches' || word == 'inch'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " inch" + inchesToMetric(num));
                }
                else{
                    output += (num + " inches" + inchesToMetric(num));
                }
                conversions++;
            }
        }
        else if(word == 'feet' || word == 'ft' || word == 'foot'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " foot" + inchesToMetric(num*12));
                }
                else{
                    output += (num + " feet" + inchesToMetric(num*12));
                }
                conversions++;
            }
        }
        else if(word == 'yards' || word == 'yd' || word == 'yard'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " yard" + inchesToMetric(num*36));
                }
                else{
                    output += (num + " yards" + inchesToMetric(num*36));
                }
                conversions++;
            }
        }
        else if(word == 'miles' || word == 'mi' || word == 'mile'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " mile" + inchesToMetric(num*63360));
                }
                else{
                    output += (num + " miles" + inchesToMetric(num*63360));
                }
                conversions++;
            }
        }
        else if(word == 'milligrams' || word == 'mg' || word == 'milligram'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " milligram" + gramsToImperial(num/1000));
                }
                else{
                    output += (num + " milligrams" + gramsToImperial(num/1000));
                }
                conversions++;
            }
        }
        else if(word == 'grams' || word == 'g' || word == 'gram'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " gram" + gramsToImperial(num));
                }
                else{
                    output += (num + " grams" + gramsToImperial(num));
                }
                conversions++;
            }
        }
        else if(word == 'kilograms' || word == 'kg' || word == 'kilogram' || word == 'kilo' || word == 'kilos'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " kilogram" + gramsToImperial(num*1000));
                }
                else{
                    output += (num + " kilograms" + gramsToImperial(num*1000));
                }
                conversions++;
            }
        }
        else if(word == 'ounces' || word == 'oz' || word == 'ounce'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " ounce" + ouncesToMetric(num));
                }
                else{
                    output += (num + " ounces" + ouncesToMetric(num));
                }
                conversions++;
            }
        }
        else if(word == 'pounds' || word == 'lb' || word == 'pound' || word == 'lbs'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " pound" + ouncesToMetric(num*16));
                }
                else{
                    output += (num + " pounds" + ouncesToMetric(num*16));
                }
                conversions++;
            }
        }
        else if(word == 'millilitres' || word == 'ml' || word == 'milliliters' || word == 'millilitre' || word == 'milliliter'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " millilitre" + litresToImperial(num/1000));
                }
                else {
                    output += (num + " millilitres" + litresToImperial(num/1000));
                }
                conversions++;
            }
        }
        else if(word == 'litres' || word == 'l' || word == 'liters' || word == 'litre' || word == 'liter'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " litre" + litresToImperial(num));
                }
                else{
                    output += (num + " litres" + litresToImperial(num));
                }
                conversions++;
            }
        }
        else if(word == 'teaspoons' || word == 'tsp' || word == 'tsps' || word == 'teaspoon' || (word == 'tea' && (extraWord == 'spoon' || extraWord == 'spoons'))){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " teaspoon" + teaspoonsToMetric(num));
                }
                else{
                    output += (num + " teaspoons" + teaspoonsToMetric(num));
                }
                conversions++;
            }
        }
        else if(word == 'tablespoons' || word == 'tbsp' || word == 'tbsps' || word == 'tablespoon' || (word == 'table' && (extraWord == 'spoon' || extraWord == 'spoons'))){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " tablespoon" + teaspoonsToMetric(num*3));
                }
                else{
                    output += (num + " tablespoons" + teaspoonsToMetric(num*3));
                }
                conversions++;
            }
        }
        else if(word == 'cup' || word == 'cups'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " cup" + teaspoonsToMetric(num*48));
                }
                else{
                    output += (num + " cups" + teaspoonsToMetric(num*48));
                }
                conversions++;
            }
        }
        else if(word == 'gallon' || word == 'gallons' || word == 'gal' || word == 'gals'){
            if(!isNaN(num)){
                if(num == 1){
                    output += (num + " gallon" + teaspoonsToMetric(num*768));
                }
                else{
                    output += (num + " gallons" + teaspoonsToMetric(num*768));
                }
                conversions++;
            }
        }
        else if(word == 'celsius' || word == '°c' || word == 'c' || ((word == 'degree' || word == 'degrees') && (extraWord == 'celsius' || extraWord == 'c'))){
            if(!isNaN(num)){
                output += (num + "°C" + celsiusToFahrenheit(num));
                conversions++;
            }
        }
        else if(word == 'fahrenheit' || word == '°f' || word == 'f' || ((word == 'degree' || word == 'degrees') && (extraWord == 'fahrenheit' || extraWord == 'f'))){
            if(!isNaN(num)){
                output += (num + "°F" + FahrenheitToCelsius(num));
                conversions++;
            }
        }
        else if(word.endsWith("mm") && letters == "mm"){
            var millimetres = parseFloat(unalteredWord.replace("mm", ""));
            if(!isNaN(millimetres)){
                if(millimetres == 1){
                    output += (millimetres + " millimetre" + metresToImperial(millimetres/1000));
                }
                else{
                    output += (millimetres + " millimetres" + metresToImperial(millimetres/1000));
                }
                conversions++;
            }
        }
        else if(word.endsWith("cm" && letters == "cm")){
            var centimetres = parseFloat(unalteredWord.replace("cm", ""));
            if(!isNaN(centimetres)){
                if(centimetres == 1){
                    output += (centimetres + " centimetre" + metresToImperial(centimetres/100));
                }
                else{
                    output += (centimetres + " centimetres" + metresToImperial(centimetres/100));
                }
                conversions++;
            }
        }
        else if(word.endsWith("km") && letters == "km"){
            var kilometres = parseFloat(unalteredWord.replace("km", ""));
            if(!isNaN(kilometres)){

                if(kilometres == 1){
                    output += (kilometres + " kilometre" + metresToImperial(kilometres*1000));
                }
                else{
                    output += (kilometres + " kilometres" + metresToImperial(kilometres*1000));
                }
                conversions++;
            }
        }
        else if(word.endsWith("m") && letters == "m"){
            var metres = parseFloat(unalteredWord.replace("m", ""));
            if(!isNaN(metres)){
                if(metres == 1){
                    output += (metres + " metre" + metresToImperial(metres));
                }
                else{
                    output += (metres + " metres" + metresToImperial(metres));
                }
                conversions++;
            }
        }
        else if(word.endsWith("in") && letters == "in"){
            var inches = parseFloat(unalteredWord.replace("in", ""));
            if(!isNaN(inches)){
                output += (inches + '"' + inchesToMetric(inches));
                conversions++;
            }
        }
        else if(word.endsWith("ft") && letters == "ft"){
            var feet = parseFloat(unalteredWord.replace("ft", ""));
            if(!isNaN(feet)){
                output += (feet + "'" + inchesToMetric(feet*12));
                conversions++;
            }
        }
        else if(feetInches.includes("'") && !feetInches.includes('"')){
            var wordSeparated = feetInches.split("'");
            if(wordSeparated.length == 2 && wordSeparated[1] == ""){
                var feet = parseFloat(wordSeparated[0]);
                if(!isNaN(feet)){
                    output += (feet + "'" + inchesToMetric(feet*12));
                    conversions++;
                }
            }
            else if(wordSeparated.length == 2){
                var feet = parseFloat(wordSeparated[0]);
                var inches = parseFloat(wordSeparated[1]);
                if(!isNaN(feet) && !isNaN(inches)){
                    output += (feet + "'" + inches + '"' + inchesToMetric(inches + feet*12));
                    conversions++;
                }
            }
        }
        else if(!feetInches.includes("'") && feetInches.includes('"')){
            var wordSeparated = feetInches.split('"');
            if(wordSeparated.length == 2 && wordSeparated[1] == ""){
                var inches = parseFloat(wordSeparated[0]);
                if(!isNaN(inches)){
                    output += (inches + '"' + inchesToMetric(inches));
                    conversions++;
                }
            }
            else if(wordSeparated.length == 2){
                var feet = parseFloat(wordSeparated[0]);
                var inches = parseFloat(wordSeparated[1]);
                if(!isNaN(feet) && !isNaN(inches)){
                    output += (feet + "'" + inches + '"' + inchesToMetric(inches + feet*12));
                    conversions++;
                }
            }
        }
        else if(feetInches.includes("'") && feetInches.includes('"')){
            var wordSeparated = feetInches.split("'");
            wordSeparated[1].replace('"', '');
            if(wordSeparated.length == 2){
                var feet = parseFloat(wordSeparated[0]);
                var inches = parseFloat(wordSeparated[1]);
                if(!isNaN(feet) && !isNaN(inches)){
                    output += (feet + "'" + inches + '"' + inchesToMetric(feet*12 + inches));
                    conversions++;
                }
            }
        }
        else if(word.endsWith("yd") && letters == "yd"){
            var yards = parseFloat(unalteredWord.replace("yd", ""));
            if(!isNaN(yards)){
                if(yards == 1){
                    output += (yards + ' yard' + inchesToMetric(yards*36));
                }
                else{
                    output += (yards + ' yards' + inchesToMetric(yards*36));
                }
                conversions++;
            }
        }
        else if(word.endsWith("mi") && letters == "mi"){
            var miles = parseFloat(unalteredWord.replace("mi", ""));
            if(!isNaN(miles)){
                if(miles == 1){
                    output += (miles + ' mile' + inchesToMetric(miles*63360));
                }
                else{
                    output += (miles + ' miles' + inchesToMetric(miles*63360));
                }
                conversions++;
            }
        }
        else if(word.endsWith("mg") && letters == "mg"){
            var milligrams = parseFloat(unalteredWord.replace("mg", ""));
            if(!isNaN(milligrams)){
                if(milligrams == 1){
                    output += (milligrams + ' milligram' + gramsToImperial(milligrams/1000));
                }
                else{
                    output += (milligrams + ' milligrams' + gramsToImperial(milligrams/1000));
                }
                conversions++;
            }
        }
        else if(word.endsWith("kg") && letters == "kg"){
            var kilograms = parseFloat(unalteredWord.replace("kg", ""));
            if(!isNaN(kilograms)){
                if(kilograms == 1){
                    output += (kilograms + ' kilogram' + gramsToImperial(kilograms*1000));
                }
                else{
                    output += (kilograms + ' kilograms' + gramsToImperial(kilograms*1000));
                }
                conversions++;
            }
        }
        else if(word.endsWith("g") && letters == "g"){
            var grams = parseFloat(unalteredWord.replace("g", ""));
            if(!isNaN(grams)){
                if(grams == 1){
                    output += (grams + ' gram' + gramsToImperial(grams));
                }
                else{
                    output += (grams + ' grams' + gramsToImperial(grams));
                }
                conversions++;
            }
        }
        else if(word.endsWith("oz") && letters == "oz"){
            var ounces = parseFloat(unalteredWord.replace("oz", ""));
            if(!isNaN(ounces)){
                if(ounces == 1){
                    output += (ounces + ' ounce' + ouncesToMetric(ounces));
                }
                else{
                    output += (ounces + ' ounces' + ouncesToMetric(ounces));
                }
                conversions++;
            }
        }
        else if((word.endsWith("lb") && letters == "lb") || (word.endsWith("lbs") && letters == "lbs")){
            var pounds = parseFloat(unalteredWord.replace("lbs", "").replace("lb", ""));
            if(!isNaN(pounds)){
                if(pounds == 1){
                    output += (pounds + ' pound' + ouncesToMetric(pounds*16));
                }
                else{
                    output += (pounds + ' pounds' + ouncesToMetric(pounds*16));
                }
                conversions++;
            }
        }
        else if((word.endsWith("tsp") && letters == "tsp") || (word.endsWith("tsps") && letters == "tsps")){
            var teaspoons = parseFloat(unalteredWord.replace("tsps", "").replace("tsp", ""));
            if(!isNaN(teaspoons)){
                if(teaspoons == 1){
                    output += (teaspoons + ' teaspoon' + teaspoonsToMetric(teaspoons));
                }
                else{
                    output += (teaspoons + ' teaspoons' + teaspoonsToMetric(teaspoons));
                }
                conversions++;
            }
        }
        else if((word.endsWith("tbsp") && letters == "tbsp") || (word.endsWith("tbsps") && letters == "tbsps")){
            var tablespoons = parseFloat(unalteredWord.replace("tbsps", "").replace("tbsp", ""));
            if(!isNaN(tablespoons)){
                if(tablespoons == 1){
                    output += (tablespoons + ' tablespoon' + teaspoonsToMetric(tablespoons*3));
                }
                else{
                    output += (tablespoons + ' tablespoons' + teaspoonsToMetric(tablespoons*3));
                }
                conversions++;
            }
        }
        else if((word.endsWith("gal") && letters == "gal") || (word.endsWith("gals") && letters == "gals")){
            var gallons = parseFloat(unalteredWord.replace("gals", "").replace("gal", ""));
            if(!isNaN(gallons)){
                if(gallons == 1){
                    output += (gallons + ' gallon' + teaspoonsToMetric(gallons*768));
                }
                else{
                    output += (gallons + ' gallons' + teaspoonsToMetric(gallons*768));
                }
                conversions++;
            }
        }
        else if(word.endsWith("ml") && letters == "ml"){
            var millilitres = parseFloat(unalteredWord.replace("ml", ""));
            if(!isNaN(millilitres)){
                if(millilitres == 1){
                    output += (millilitres + ' millilitre' + litresToImperial(millilitres/1000));
                }
                else{
                    output += (millilitres + ' millilitres' + litresToImperial(millilitres/1000));
                }
                conversions++;
            }
        }
        else if(word.endsWith("l") && letters == "l"){
            var litres = parseFloat(unalteredWord.replace("l", ""));
            if(!isNaN(litres)){
                if(litres == 1){
                    output += (litres + ' litre' + litresToImperial(litres));
                }
                else{
                    output += (litres + ' litres' + litresToImperial(litres));
                }
                conversions++;
            }
        }
        else if(word.endsWith("c") && (letters == "c" || letters == "°c")){
            var celsius = parseFloat(unalteredWord.replace("°c", "").replace("c", ""));
            if(!isNaN(celsius)){
                output += (celsius + '°C' + celsiusToFahrenheit(celsius));
                conversions++;
            }
        }
        else if(word.endsWith("f") && (letters == "f" || letters == "°f")){
            var fahrenheit = parseFloat(unalteredWord.replace("°f", "").replace("f", ""));
            if(!isNaN(fahrenheit)){
                output += (fahrenheit + '°F' + FahrenheitToCelsius(fahrenheit));
                conversions++;
            }
        }

        if(conversions >= 5) break;
    }
    if(conversions >= 1){
        message.channel.send(output);
    }
        conversions = 0;
});

client.login(process.env.BOT_TOKEN);