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

function convertDistance(num, unit1, unit2){
    var metres = 0;
    var result = 0;
    var output = "";
    
    if(unit1 == "millimetres" || unit1 == "millimetre" || unit1 == "millimeter" || unit1 == "millimeters" || unit1 == "mm"){
        metres = num/1000;
        if (num == 1){
            output += num + " millimetre = ";
        }
        else{
            output += num + " millimetres = ";
        }
    }
    else if(unit1 == "centimetres" || unit1 == "centimetre" || unit1 == "centimeter" || unit1 == "centimeters" || unit1 == "cm"){
        metres = num/100;
        if(num == 1){
            output += num + " centimetre = ";
        }
        else{
            output += num + " centimetres = ";
        }
    }
    else if(unit1 == "decimetres" || unit1 == "decimetre" || unit1 == "decimeter" || unit1 == "decimeters"){
        metres = num/10;
        if(num == 1){
            output += num + " decimetre = ";
        }
        else{
            output += num + " decimetres = ";
        }
    }
    else if(unit1 == "metres" || unit1 == "metre" || unit1 == "meter" || unit1 == "meters" || unit1 == "m"){
        metres = num;
        if(num == 1){
            output += num + " metre = ";
        }
        else{
            output += num + " metres = ";
        }
    }
    else if(unit1 == "decametres" || unit1 == "decametre" || unit1 == "decameter" || unit1 == "decameters"){
        metres = num*10;
        if(num == 1){
            output += num + " decametre = ";
        }
        else{
            output += num + " decametres = ";
        }
    }
    else if(unit1 == "hectometres" || unit1 == "hectometre" || unit1 == "hectometer" || unit1 == "hectometers" || unit1 == "hm"){
        metres = num*100;
        if(num == 1){
            output += num + " hectometre = ";
        }
        else{
            output += num + " hectometres = ";
        }
    }
    else if(unit1 == "kilometres" || unit1 == "kilometre" || unit1 == "kilometer" || unit1 == "kilometers" || unit1 == "km"){
        metres = num*1000;
        if(num == 1){
            output += num + " kilometre = ";
        }
        else{
            output += num + " kilometres = ";
        }
    }
    else if(unit1 == "inches" || unit1 == "inch" || unit1 == "in"){
        metres = num*0.0254;
        if(num == 1){
            output += num + " inch = ";
        }
        else{
            output += num + " inches = ";
        }
    }
    else if(unit1 == "foot" || unit1 == "feet" || unit1 == "ft"){
        metres = num*0.3048;
        if(num == 1){
            output += num + " foot = ";
        }
        else{
            output += num + " feet = ";
        }
    }
    else if(unit1 == "yard" || unit1 == "yards" || unit1 == "yd"){
        metres = num*0.9144;
        if(num == 1){
            output += num + " yard = ";
        }
        else{
            output += num + " yards = ";
        }
    }
    else if(unit1 == "miles" || unit1 == "mile" || unit1 == "mi"){
        metres = num*1609.344;
        if(num == 1){
            output += num + " mile = ";
        }
        else{
            output += num + " miles = ";
        }
    }

    if(unit2 == "millimetres" || unit2 == "millimetre" || unit2 == "millimeter" || unit2 == "millimeters" || unit2 == "mm"){
        result = metres*1000;
        output += result.toFixed(2) + " millimetres";
    }
    else if(unit2 == "centimetres" || unit2 == "centimetre" || unit2 == "centimeter" || unit2 == "centimeters" || unit2 == "cm"){
        result = metres*100;
        output += result.toFixed(2) + " centimetres";
    }
    else if(unit2 == "decimetres" || unit2 == "decimetre" || unit2 == "decimeter" || unit2 == "decimeters"){
        result = metres*10;
        output += result.toFixed(2) + " decimetres";
    }
    else if(unit2 == "metres" || unit2 == "metre" || unit2 == "meter" || unit2 == "meters" || unit2 == "m"){
        result = metres;
        output += result.toFixed(2) + " metres";
    }
    else if(unit2 == "decametres" || unit2 == "decametre" || unit2 == "decameter" || unit2 == "decameters"){
        result = metres/10;
        output += result.toFixed(2) + " decametres";
    }
    else if(unit2 == "hectometres" || unit2 == "hectometre" || unit2 == "hectometer" || unit2 == "hectometers" || unit2 == "hm"){
        result = metres/100;
        output += result.toFixed(2) + " hectometres";
    }
    else if(unit2 == "kilometres" || unit2 == "kilometre" || unit2 == "kilometer" || unit2 == "kilometers" || unit2 == "km"){
        result = metres/1000;
        output += result.toFixed(2) + " kilometres";
    }
    else if(unit2 == "inches" || unit2 == "inch" || unit2 == "in"){
        result = metres/0.0254;
        output += result.toFixed(2) + " inches";
    }
    else if(unit2 == "foot" || unit2 == "feet" || unit2 == "ft"){
        result = metres/0.3048;
        output += result.toFixed(2) + " feet";
    }
    else if(unit2 == "yard" || unit2 == "yards" || unit2 == "yd"){
        result = metres/0.9144;
        output += result.toFixed(2) + " yards";
    }
    else if(unit2 == "miles" || unit2 == "mile" || unit2 == "mi"){
        result = metres/1609.344;
        output += result.toFixed(2) + " miles";
    }

    return (output);
}

function convertVolume(num, unit1, unit2){
    var litres = 0;
    var result = 0;
    var output = "";
    
    if(unit1 == "millilitres" || unit1 == "millilitre" || unit1 == "milliliter" || unit1 == "milliliters" || unit1 == "ml"){
        litres = num/1000;
        if (num == 1){
            output += num + " millilitre = ";
        }
        else{
            output += num + " millilitres = ";
        }
    }
    else if(unit1 == "centilitres" || unit1 == "centilitre" || unit1 == "centiliter" || unit1 == "centiliters" || unit1 == "cl"){
        litres = num/100;
        if(num == 1){
            output += num + " centilitre = ";
        }
        else{
            output += num + " centilitres = ";
        }
    }
    else if(unit1 == "decilitres" || unit1 == "decilitre" || unit1 == "deciliter" || unit1 == "deciliters"){
        litres = num/10;
        if(num == 1){
            output += num + " decilitre = ";
        }
        else{
            output += num + " decilitres = ";
        }
    }
    else if(unit1 == "litres" || unit1 == "litre" || unit1 == "liter" || unit1 == "liters" || unit1 == "l"){
        litres = num;
        if(num == 1){
            output += num + " litre = ";
        }
        else{
            output += num + " litres = ";
        }
    }
    else if(unit1 == "decalitres" || unit1 == "decalitre" || unit1 == "decaliter" || unit1 == "decaliters"){
        litres = num*10;
        if(num == 1){
            output += num + " decalitre = ";
        }
        else{
            output += num + " decalitres = ";
        }
    }
    else if(unit1 == "hectolitres" || unit1 == "hectolitre" || unit1 == "hectoliter" || unit1 == "hectoliters" || unit1 == "hl"){
        litres = num*100;
        if(num == 1){
            output += num + " hectolitre = ";
        }
        else{
            output += num + " hectolitres = ";
        }
    }
    else if(unit1 == "kilolitres" || unit1 == "kilolitre" || unit1 == "kiloliter" || unit1 == "kiloliters" || unit1 == "kl"){
        litres = num*1000;
        if(num == 1){
            output += num + " kilolitre = ";
        }
        else{
            output += num + " kilolitres = ";
        }
    }
    else if(unit1 == "teaspoon" || unit1 == "teaspoons" || unit1 == "tsp" || unit1 == "tsps"){
        litres = num*0.00492892159;
        if(num == 1){
            output += num + " teaspoon = ";
        }
        else{
            output += num + " teaspoons = ";
        }
    }
    else if(unit1 == "tablespoon" || unit1 == "tablespoons" || unit1 == "tbsp" || unit1 == "tbsps"){
        litres = num*0.0147867648;
        if(num == 1){
            output += num + " tablespoon = ";
        }
        else{
            output += num + " tablespoons = ";
        }
    }
    else if(unit1 == "ounce" || unit1 == "ounces" || unit1 == "oz" || unit1 == "floz"){
        litres = num*0.0295735296;
        if(num == 1){
            output += num + " ounce = ";
        }
        else{
            output += num + " ounces = ";
        }
    }
    else if(unit1 == "cups" || unit1 == "cup"){
        litres = num*0.236588237;
        if(num == 1){
            output += num + " cup = ";
        }
        else{
            output += num + " cups = ";
        }
    }
    else if(unit1 == "pint" || unit1 == "pints" || unit1 == "pt"){
        litres = num*0.473176473;
        if(num == 1){
            output += num + " pint = ";
        }
        else{
            output += num + " pints = ";
        }
    }
    else if(unit1 == "gallon" || unit1 == "gallons" || unit1 == "gal" || unit1 == "gals"){
        litres = num*3.78541178;
        if(num == 1){
            output += num + " gallon = ";
        }
        else{
            output += num + " gallons = ";
        }
    }

    if(unit2 == "millilitres" || unit2 == "millilitre" || unit2 == "milliliter" || unit2 == "milliliters" || unit2 == "ml"){
        result = litres*1000;
        output += result.toFixed(2) + " millilitres";
    }
    else if(unit2 == "centilitres" || unit2 == "centilitre" || unit2 == "centiliter" || unit2 == "centiliters" || unit2 == "cl"){
        result = litres*100;
        output += result.toFixed(2) + " centilitres";
    }
    else if(unit2 == "decilitres" || unit2 == "decilitre" || unit2 == "deciliter" || unit2 == "deciliters"){
        result = litres*10;
        output += result.toFixed(2) + " decilitres";
    }
    else if(unit2 == "litres" || unit2 == "litre" || unit2 == "liter" || unit2 == "liters" || unit2 == "l"){
        result = litres;
        output += result.toFixed(2) + " litres";
    }
    else if(unit2 == "decalitres" || unit2 == "decalitre" || unit2 == "decaliter" || unit2 == "decaliters"){
        result = litres/10;
        output += result.toFixed(2) + " decalitres";
    }
    else if(unit2 == "hectolitres" || unit2 == "hectolitre" || unit2 == "hectoliter" || unit2 == "hectoliters" || unit2 == "hl"){
        result = litres/100;
        output += result.toFixed(2) + " hectolitres";
    }
    else if(unit2 == "kilolitres" || unit2 == "kilolitre" || unit2 == "kiloliter" || unit2 == "kiloliters" || unit2 == "kl"){
        result = litres/1000;
        output += result.toFixed(2) + " kilolitres";
    }
    else if(unit2 == "teaspoon" || unit2 == "teaspoons" || unit2 == "tsp" || unit2 == "tsps"){
        result = litres/0.00492892159;
        output += result.toFixed(2) + " teaspoons";
    }
    else if(unit2 == "tablespoon" || unit2 == "tablespoons" || unit2 == "tbsp" || unit2 == "tbsps"){
        result = litres/0.0147867648;
        output += result.toFixed(2) + " tablespoons";
    }
    else if(unit2 == "ounce" || unit2 == "ounces" || unit2 == "oz" || unit2 == "floz"){
        result = litres/0.0295735296;
        output += result.toFixed(2) + " ounces";
    }
    else if(unit2 == "cups" || unit2 == "cup"){
        result = litres/0.236588237;
        output += result.toFixed(2) + " cups";
    }
    else if(unit2 == "pint" || unit2 == "pints" || unit2 == "pt"){
        result = litres/0.473176473;
        output += result.toFixed(2) + " pints";
    }
    else if(unit2 == "gallon" || unit2 == "gallons" || unit2 == "gal" || unit2 == "gals"){
        result = litres/3.78541178;
        output += result.toFixed(2) + " gallons";
    }

    return (output);
}

function convertWeight(num, unit1, unit2){
    var grams = 0;
    var result = 0;
    var output = "";
    
    if(unit1 == "milligrams" || unit1 == "milligram" || unit1 == "mg"){
        grams = num/1000;
        if (num == 1){
            output += num + " milligram = ";
        }
        else{
            output += num + " milligrams = ";
        }
    }
    else if(unit1 == "centigrams" || unit1 == "centigram" || unit1 == "cg"){
        grams = num/100;
        if(num == 1){
            output += num + " centigram = ";
        }
        else{
            output += num + " centigrams = ";
        }
    }
    else if(unit1 == "decigrams" || unit1 == "decigram"){
        grams = num/10;
        if(num == 1){
            output += num + " decigram = ";
        }
        else{
            output += num + " decigrams = ";
        }
    }
    else if(unit1 == "grams" || unit1 == "gram" || unit1 == "g"){
        grams = num;
        if(num == 1){
            output += num + " gram = ";
        }
        else{
            output += num + " grams = ";
        }
    }
    else if(unit1 == "decagrams" || unit1 == "decagram"){
        grams = num*10;
        if(num == 1){
            output += num + " decagram = ";
        }
        else{
            output += num + " decagrams = ";
        }
    }
    else if(unit1 == "hectograms" || unit1 == "hectogram" || unit1 == "hg"){
        grams = num*100;
        if(num == 1){
            output += num + " hectogram = ";
        }
        else{
            output += num + " hectograms = ";
        }
    }
    else if(unit1 == "kilograms" || unit1 == "kilogram" || unit1 == "kilo" || unit1 == "kilos" || unit1 == "kg"){
        grams = num*1000;
        if(num == 1){
            output += num + " kilogram = ";
        }
        else{
            output += num + " kilograms = ";
        }
    }
    else if(unit1 == "ounce" || unit1 == "ounces" || unit1 == "oz"){
        grams = num*28.35;
        if(num == 1){
            output += num + " ounce = ";
        }
        else{
            output += num + " ounces = ";
        }
    }
    else if(unit1 == "pound" || unit1 == "pounds" || unit1 == "lb" || unit1 == "lbs"){
        grams = num*453.592;
        if(num == 1){
            output += num + " pound = ";
        }
        else{
            output += num + " pounds = ";
        }
    }
    else if(unit1 == "stone" || unit1 == "stones" || unit1 == "st"){
        grams = num*6350.293;
        if(num == 1){
            output += num + " stone = ";
        }
        else{
            output += num + " stones = ";
        }
    }
    else if(unit1 == "fuckload" || unit1 == "fuckload"){
        grams = num*200000;
        if(num == 1){
            output += num + " fuckload = ";
        }
        else{
            output += num + " fuckloads = ";
        }
    }
    else if(unit1 == "shitton" || unit1 == "shittons"){
        grams = num*500000;
        if(num == 1){
            output += num + " shitton = ";
        }
        else{
            output += num + " shittons = ";
        }
    }

    if(unit2 == "milligrams" || unit2 == "milligram" || unit2 == "mg"){
        result = grams*1000;
        output += result.toFixed(2) + " milligrams";
    }
    else if(unit2 == "centigrams" || unit2 == "centigram" || unit2 == "cg"){
        result = grams*100;
        output += result.toFixed(2) + " centigrams";
    }
    else if(unit2 == "decigrams" || unit2 == "decigram"){
        result = grams*10;
        output += result.toFixed(2) + " decigrams";
    }
    else if(unit2 == "grams" || unit2 == "gram" || unit2 == "g"){
        result = grams;
        output += result.toFixed(2) + " grams";
    }
    else if(unit2 == "decagrams" || unit2 == "decagram"){
        result = grams/10;
        output += result.toFixed(2) + " decagrams";
    }
    else if(unit2 == "hectograms" || unit2 == "hectogram" || unit2 == "hg"){
        result = grams/100;
        output += result.toFixed(2) + " hectograms";
    }
    else if(unit2 == "kilograms" || unit2 == "kilogram" || unit2 == "kilo" || unit2 == "kilos" || unit2 == "kg"){
        grams = num*1000;
        result = grams/1000;
        output += result.toFixed(2) + " kilograms";
    }
    else if(unit2 == "ounce" || unit2 == "ounces" || unit2 == "oz"){
        result = grams/28.35;
        output += result.toFixed(2) + " ounces";
    }
    else if(unit2 == "pound" || unit2 == "pounds" || unit2 == "lb" || unit2 == "lbs"){
        result = grams/453.592;
        output += result.toFixed(2) + " pounds";
    }
    else if(unit2 == "stone" || unit2 == "stones" || unit1 == "st"){
        result = grams/6350.293;
        output += result.toFixed(2) + " stones";
    }
    else if(unit2 == "fuckload" || unit2 == "fuckload"){
        grams = num*200000;
        result = grams/200000;
        output += result.toFixed(2) + " fuckloads";
    }
    else if(unit2 == "shitton" || unit2 == "shittons"){
        grams = num*500000;
        result = grams/500000;
        output += result.toFixed(2) + " shittons";
    }

    return (output);
}

function convertTemperature(num, unit1, unit2){
    var kelvin = 0;
    var result = 0;
    var output = "";
    
    if(unit1 == "celsius" || unit1 == "c" || unit1 == "°c"){
        kelvin = num + 273.15;
        output += num + "°C = ";
    }
    else if(unit1 == "fahrenheit" || unit1 == "f" || unit1 == "°f"){
        kelvin = (num - 32)*5/9 + 273.15;
        output += num + "°F = ";
    }
    else if(unit1 == "kelvin" || unit1 == "k"){
        kelvin = num;
        output += num + " kelvin = ";
    }

    if(unit2 == "celsius" || unit2 == "c" || unit2 == "°c"){
        result = kelvin - 273.15;
        output += result.toFixed(2) + "°C";
    }
    else if(unit2 == "fahrenheit" || unit2 == "f" || unit2 == "°f"){
        result = (kelvin - 273.15)*9/5 + 32;
        output += result.toFixed(2) + "°F";
    }
    else if(unit2 == "kelvin" || unit2 == "k"){
        result = kelvin;
        output += result.toFixed(2) + " kelvin";
    }

    return (output);
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
"kilograms", "kilogram", "kg", "kilo", "kilos", 
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

        var num = parseFloat(args[0]);
        var unit1 = args[1].toLowerCase();
        var unit2 = args[3].toLowerCase();

        if(distanceWords.includes(unit1)){
            if(!distanceWords.includes(unit2)){
                if(weightWords.includes(unit2)){
                    message.channel.send("I can't convert units of distance to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(volumeWords.includes(unit2)){
                    message.channel.send("I can't convert units of distance to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(temperatureWords.includes(unit2)){
                    message.channel.send("I can't convert units of distance to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + unit2 + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }

            message.channel.send(convertDistance(num, unit1, unit2));
        }
        else if(weightWords.includes(unit1) && !((unit1 == "ounce" || unit1 == "ounces" || unit1 == "oz") && volumeWords.includes(unit2))){
            if(!weightWords.includes(unit2)){
                if(distanceWords.includes(unit2)){
                    message.channel.send("I can't convert units of weight to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(volumeWords.includes(unit2)){
                    message.channel.send("I can't convert units of weight to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(temperatureWords.includes(unit2)){
                    message.channel.send("I can't convert units of weight to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + unit2 + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }

            message.channel.send(convertWeight(num, unit1, unit2));
        }
        else if(volumeWords.includes(unit1)){
            if(!volumeWords.includes(unit2)){
                if(weightWords.includes(unit2)){
                    message.channel.send("I can't convert units of volume to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(distanceWords.includes(unit2)){
                    message.channel.send("I can't convert units of volume to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(temperatureWords.includes(unit2)){
                    message.channel.send("I can't convert units of volume to units of temperature!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + unit2 + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }

            message.channel.send(convertVolume(num, unit1, unit2));
        }
        else if(temperatureWords.includes(unit1)){
            if(!temperatureWords.includes(unit2)){
                if(weightWords.includes(unit2)){
                    message.channel.send("I can't convert units of temperature to units of weight!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(volumeWords.includes(unit2)){
                    message.channel.send("I can't convert units of temperature to units of volume!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else if(distanceWords.includes(unit2)){
                    message.channel.send("I can't convert units of temperature to units of distance!\nIf you think this is a mistake, please contact @Wep#0525");
                }
                else{
                    message.channel.send("Seems like I haven't learned the unit `" + unit2 + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
                }
                return;
            }

            message.channel.send(convertTemperature(num, unit1, unit2));
        }
        else{
            message.channel.send("Seems like I haven't learned the unit `" + unit1 + "` yet!\nMake sure you didn't make a typo and contact @Wep#0525 if you want me to learn this unit!");
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