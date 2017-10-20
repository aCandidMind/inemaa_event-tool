import React, {Component} from 'react';
import Header from './components/header/Header';

class About extends Component {

  handleWishListClick() {
    alert('Bitte vorübergehend erst mal das Logo klicken');
  }

  render() {
    return (
      <div id="about" className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-medium reveal-for-large" id="filters" data-off-canvas>
        </div>

        <div id="main" className="off-canvas-content" data-off-canvas-content>
          <Header handleWishListClick={this.handleWishListClick.bind(this)} />
          <div className="content">
            <div className="callout">
              <h3>Die Idee</h3>
              <p>Messen, Konzerte, Firmenfeiern bis hin zur privaten Gartenparty sind ein fester Bestandteil des Frankfurter Privat- und Geschäftsalltags. Klimafreundliche bzw. klimaneutrale Veranstaltungen jeglicher Art können einen wesentlichen Beitrag zum Masterplan 100% Klimaschutz Frankfurt am Main beitragen. Anbieter von Produkten und Dienstleistungen, mit denen Veranstaltungen klimafreundlich bzw. klimaneutral ausgerichtet werden können gibt es bereits, auch in der Region!</p>
              <p>
                Für Eventmanager stellen sich u.a. folgende Fragen:<br />
                <ul>
                  <li>Wie finde ich diese Anbieter?</li>
                  <li>Woher weiß ich, dass sie klimafreundlich bzw. nachhaltig sind?</li>
                  <li>Wie kann ich einfach und direkt Kontakt aufnehmen?</li>
                </ul>
              </p>
              <p>Hier setzt unsere Idee an!<br />Im Rahmen des Ideenwettbewerbs Klimaschutz entwickelten wir ein Marktplatz für nachhaltige Eventlösungen für die Metropolregion Frankfurt/Rhein-Main. Zunächst für die Kategorien “Location”, “Catering”, “Unterkunft” und “Mobilität”, später sollen weitere Kategorien (z.B. Messebau, Dekoration etc.) hinzukommen. </p>
            </div>
            <div className="callout">
              <h3>Über uns</h3>
              <p>inemaa ist ein 2016 gegründetes technologieorientiertes Beratungsunternehmen ansässig in Frankfurt am Main und Kassel. Hinter inemaa stehen die Geschäftsführerinnen Lechi Engel-Langewand, Kristina Gruber und Martina Keller - Expertinnen für Nachhaltigkeit und Digitalisierung. </p>
              <p>Unser erklärtes Ziel: Nachhaltigkeit von der Ausnahme zur Regel zu machen, auf Veranstaltungen und darüber hinaus!</p>
              <p>Dafür beraten wir zum einen Veranstalter, v.a. in der Kunst- und Kulturbranche. Als Partner der ARGE Nachhaltigkeitswerk konnten wir als erstes großes Referenzprojekt die documenta und Museum Friedericianum gGmbH gewinnen. </p>
              <p>Zum anderen entwickeln wir ein market network für nachhaltige Eventlösungen. Unser market network ist Marktplatz, soziales Netzwerk und Software-as-a-Service für Eventmanager, die ihre Events nachhaltig und zukunftsfähig ausrichten wollen.</p>
              <p>
                Besucht uns auf <a href="www.inemaa.eu">www.inemaa.eu</a><br />
                Schreibt uns unter info@inemaa.eu<br />
                Ruft uns an unter +49 (0) 69 87202321
              </p>
            </div>
            <div className="callout">
              <h3>Nachhaltigkeit</h3>
              <p>Die Stadt Frankfurt hat sich das Ziel gesetzt, bis 2050 auf 100% erneuerbare Energien umzustellen und die CO2-Emissionen um 95% zu senken. Der Masterplan 100% Klimaschutz ist Fahrplan für dieses Ziel. Es stehen die drei Sektoren Wärme, Strom und Verkehr im Fokus, aber auch Abfall und Abwasser sowie Landwirtschaft sind wesentliche Treiber. </p>
              <p>Für den Marktplatz orientieren wir uns zunächst an Maßnahmen (seitens der Anbieter), die einen Beitrag zur Erreichung diese Ziels leisten. Beispielsweise der Einsatz von Erneuerbaren Energien, die Absenkung der Raumtemperatur, der Einsatz energieeffizienter Geräte, kurze Wege, Regionalität, umweltverträgliche Verkehrsmittel, emissionsarme Fahrzeuge, Fahrgemeinschaften, Mehrweg, saisonale Lebensmittel, Reduktion des Fleischangebots, wassersparende Armaturen, Komposttoiletten und viele mehr. </p>
              <p>Die Bandbreite der Maßnahmen ist groß, die systematische Erfassung aufwendig! Schritt-für-Schritt werden wir die Entwicklung unserer Nachhaltigkeitskriterien veröffentlichen, um transparent zu sein, um Feedback einzuholen und um Vertrauen zu schaffen. </p>
            </div>
            <div className="callout">
              <h3>Unsere Partner</h3>
              <ul>
                <li></li>
              </ul>
            </div>
            <div className="callout">
              <h3>Kontakt</h3>
              inemaa GbR - Sustainable Event Concepts<br />
              +49 (0) 69 87202321⎹ info@inemaa.eu<br />
              <a href="www.inemaa.eu">www.inemaa.eu</a><br />
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="callout">
              <h3>Impressum</h3>
              inemaa GbR - Christine Braun, Lechi Engel-Langewand, Kristina Gruber<br />
              Rödelheimer Parkweg 14<br />
              60489 Frankfurt am Main<br />
              +49 (0) 69 87202321<br />
              info@inemaa.eu<br />
              <a href="www.inemaa.eu">www.inemaa.eu</a><br />
              Steuernummer: 014 330 31281
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
