# week44

1. Kunne bruge react komponenter og kommunikation mellem Komponenter:

Vi startede med at gøre brug af komponenter tirsdag hvor vi gør brug af export/import for at kunne arbejde med diverse komponenter i vores projekt. Alt i react foregår via komponenter hvor man bygger et komponent op med sit eget hovedformål. Derved undgår man redundant kode og kan genbruge komponenter, som kan genbruges flere steder i sin applikation. Der er klasse og funktions komponenter. Det kan bruges ved bla. at sende props med som en slags variable og returnere et react element som bliver renderet og vist på klientsiden.

Eks: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/App.js

Se App.js hvor vi øverst importer vores komponenter og gør f.eks. brug af dem i linje 42-44

2. Kunne bruge JSX samt forklare hvilket problem JSX løser for os.

JSX er en JavaScript extension, der gør det muligt for os at kunne skrive HTML elementer i vores JavaScript uden brug af en masse DOM objekter (eks. document.getElementById()). 

Eks: på dette ses igen i samme link: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/App.js

Se funktionen App() fra linje 32-59

3. Kunne forklare og demonstrere brug af props i React
Props står for properties og er stateless. Dvs. det bruges som read-only og ikke til at ændre en value, hvor state bruges i stedet. Props bruges til at sende data fra en component til en anden. Props sendes altid fra parrent til child. For at kunne gå fra child til parrent skal man bruge "lifting state up".

Eks: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/file3.js

Se i file3.js i linje 15-17, som sender en prop videre til funktionen Welcome i linje 5

4. Kunne forklare og demonstrere brug af state i React med Hooks via useState
En hook er en speciel funktion, som lader os gøre brug af react features. Et eksempel på dette kunne være metoden useState. Ved at gøre brug af useState kan man tilføje en state til en komponent. 

Eks: https://github.com/Amazingh0rse/week44/blob/main/wednesday/src/App.js

I linje 50 i App.js kan man se const [count, setCount] = useState(0);. Count er en getter og setCount er en setter, hvis man sammenligner det med java verden. setState kan sammenlignes med en constructor. 
I linje 35 jeg brug af count og setCount. I linje 50 gøres brug af useState.

5. Kunne bruge useEffect og forklare forskellig anvendelse af dette.

Ved at bruge useEffect, fortæller man react at der skal gøres noget bestemt efter render(ens DOM er loaded færdig). Dvs. man gør brug af useEffect efter en update af ens DOM. Man kan have flere useEffect metoder i samme fil.
React vil huske den funktion man passer og kan derved gøre brug af den efter ens DOM er blevet opdateret.

Eks:https://github.com/Amazingh0rse/week44/blob/main/thursday/API/react-crud-rest-exercise-master/src/components/App.js

I filen App.js linje 11 gøres brug af useEffect og her bruges denne hook til at  indsætte data til vores tabel, efter vores DOM er loaded.

6. Kunne bruge list og keys i react, samt bruge controlled komponents til formdata.

Ved at gøre brug af keys kan man entydigt identificere rækker i en liste. Herved opstår der ikke konflikter, når man skal finde hver enkelte række. Controlled components er når ens form data bliver afviklet af et React komponent.

Eks: https://github.com/Amazingh0rse/week44/blob/main/wednesday/src/ListDemo.js

Her vælger vi at henvise til hele ListDemo.jsx filen, da der her gøres brug af to komponenter. MemberTable, som indeholder MemberDemo, og dette returneres til hvor det kaldes fra. På linje 26 indsættes en key til hver table row (<tr>).
