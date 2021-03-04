#! /usr/bin/python3

# solids.cgi - do math on solid geometry
#
# D Provine & Chris Finnegan, 9 Nov 2020

import cgi
import cgitb
cgitb.enable(format='text')

print('Access-Control-Allow-Origin: *')
print('Content-type: text/plain')
print()

print('Here is the data you sent:')

formdata = cgi.FieldStorage()

for key in sorted(formdata.keys()):
    print(key + '->' + formdata.getvalue(key))

# Selects the appropriate solid
switch (formdata.getvalue('solid')) {
    
    case 1: formdata.getvalue('solid') == 'cube':
    
        if formdata.getvalue('area') == 'on':
            height = float(formdata.getvalue('height'))
            print('Area:', 6 * height ** 2)
    
        if formdata.getvalue('volume') == 'on':
            height = float(formdata.getvalue('height'))
            print('Volume:', (6 * height ** 2)**3)
    
            break;
    
    case 2: formdata.getvalue('solid') == 'sphere':
    
        if formdata.getvalue('area') == 'on':
            radius = float(formdata.getvalue('radius'))
            print('Area:', 4.0 * 3.1415926535 * radius ** 2)
    
        else:
            formdata.getvalue('volume') == 'on'
            radius = float(formdata.getvalue('radius'))
            print('Volume:', (4.0 / 3.0) * 3.1415926535 * radius ** 3)
    
            break;
    
    case 3: formdata.getvalue('solid') == 'cylinder':
    
        if formdata.getvalue('area') == 'on':
            radius = float(formdata.getvalue('radius'))
            height = float(formdata.getvalue('height'))
            print('Area:', 2.0 * 3.1415926535 * radius * height + 2.0 * 3.1415926535 * radius ** 2)
    
        else:
            formdata.getvalue('volume') == 'on'
            radius = float(formdata.getvalue('radius'))
            height = float(formdata.getvalue('height'))
            print('Volume:', 3.1415926535 * radius ** 2 * height)
    
            break;
}