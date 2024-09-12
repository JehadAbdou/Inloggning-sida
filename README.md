Inlogging sid by Jehad:
index.html har jag delat till två delar:
1-fösta div med class main som jag har använt för log in sida där finns  två input 1 för användare namn och den andra för lösenord, och en login knapp.
2-andra div med class inlogged  som har "Welcome..." meddelande och en logout knapp som rensar all sparade info till användare.

inloggingSida.js har jag delat också till olika delar.
appen börjar med att få alla elementet(username,password,login-btn,osv..)
app börjar med isLogged som är False, och när användaren matar in rätt användernamn och lösenord, så blir isLogged True.som hjälper med att komma tillbaka till 'Welcome' sida.

appen har 2 funktioner:
1- logIn som ligger till 2 classes "login som ta bort inputs och login knapp, logout class som visar Welcome meddelande och logout knapp", och användarens namn lösenord sparas i local storage och spara True på islogged i local storage
som hjälper till med att stanna inlogged även om man stänger sida utan att logga ut.

 userName.value = "", passWord.value = "" för att tomma input fältet.

 2- logout funktion som tabort de 2 klasser som login funktion har lagt till (login,logout). och rensa local storage info.


 sedan kommer if statment som kollar ifall islogged är true så går appen till "Welcome sida" direkt.

 efter den kommer en eventlistner till login knapp som när clicked så kommer till if statment med två val:

 1- om username och password stämmer med inmatad values från användare så logIn funktion körs och går appen till "welcome sida".
 2- annars får användaren en alret med meddelande "Wrong username or password".

 I slutet kommer en logout knapp som har en event listner som också lyssnar på en click och sedan körs logOut funktion.
