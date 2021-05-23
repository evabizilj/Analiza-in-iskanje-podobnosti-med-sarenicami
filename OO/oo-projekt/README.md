# OO Projekt - Analiza in iskanje podobnosti med šarenicami

1. Avtorji projekta:
- Amadej Šenk Juh 
- Gašper Groznik
- Eva Bizilj
- Sanil Safić

2. Vloge pri projektu:
- **Gašper** in **Sanil** sta poskrbela za ureditev sprednjega dela (angl. *frontend*) in zaledja (angl. *backend*) spletne strani in dostavo spletne-programske opreme na Heroku.
- **Eva** in **Amadej** sta poskrbela za predprocesiranje slik šarenic z uporabo K-means algoritma in algoritma za iskanje barvne podobnosti. Le-te sta na podlagi spreminjajoče se **k vrednosti**  uredila v naraščajočem vrstnem redu. Končni izdelek predprocesiranja je **GIF**.

3. Tehnologije, uporabljene na projektu:
- xShell script
- Python 
- MEAN stack -> predvsem Angular.js, Node.js

4. Razvoj projekta je razdeljen v 2 fazi:
- Predprocesiranje šarenic in avtomatičnim generiranjem GIF-ov s skriptami
- Prikaz rezultatov 1. faze projekta na spletne strani 

5. Namen projekta:
- Raziskovati podobnosti med šarenicami, tako med istimi barvami kot tudi med različnimi.

6. Funkcionalnosti spletne strani:
- Kolaž (dostopen tudi v 4K - skalirana spletna stran)
- Primerjava enakih šarenic pri istem intervalu k € (1,30) in različnem številu iteracij gručenja (n € {5,10}).

7. Opažanja:

- Pri Kolažu opažamo konvergenco iz enostavne v bolj kompleksno strukturo šarenic, ki so na koncu že zelo lep približek slikam pravih šarenic.
- Pri primerjavi enakih šarenic se osredotočamo predvsem na način in lokacijo pokritosti z barvami, s čimer želimo pokazati, da algoritem kljub polovičnemu številu iteracij še vedno konvergira k enakemu rezultatu - le pot je drugačna.

8. Navodila za zagon aplikacije

- $ git clone https://github.com/gg4822/OO-projekt.git
- $ cd OO-projekt/OO/oo-projekt
- $ npm install
- $ ng serve

*Če v računalniku nimate nameščenga ng ukaza, pred zadnjim ukazom iz zgoraj naštetih sledite tem navodilom:
- $ npm install -g @angular/cli
- urejanje spremenljivk sistemskega okolja -> Spremenljivke okolja ... -> Path, Uredi ... -> Novo
- V spremenljivke okolja dodajte pot do bin mape angularja "C:\Users\[your-user]\AppData\Roaming\npm\node_modules\@angular\cli\bin"
- Potrdite dodajanje spremenljivke
- Ponovno zaženete CMD terminal, sedaj bi morala biti ng komanda na voljo.