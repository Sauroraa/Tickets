import { legal, socials } from '../data/eventData'
import './Legal.css'

export default function Legal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="legal__overlay" onClick={onClose}>
      <div className="legal__modal" onClick={(e) => e.stopPropagation()}>
        <button className="legal__close" onClick={onClose} aria-label="Fermer">&times;</button>

        <h2 className="legal__title">Mentions légales</h2>

        <div className="legal__section">
          <h3>Éditeur du site</h3>
          <p>
            {legal.entreprise}<br />
            Numéro d'entreprise : {legal.numero}<br />
            Email : <a href={`mailto:${legal.email}`}>{legal.email}</a><br />
            Site : <a href={legal.site} target="_blank" rel="noopener noreferrer">{legal.site}</a>
          </p>
        </div>

        <div className="legal__section">
          <h3>Hébergement</h3>
          <p>
            Le site est hébergé sur un serveur privé virtuel (VPS).<br />
            Le contenu est servi via Nginx avec certificat SSL Let's Encrypt.
          </p>
        </div>

        <div className="legal__section">
          <h3>Propriété intellectuelle</h3>
          <p>
            L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété
            exclusive de {legal.entreprise}, sauf mention contraire. Toute reproduction, représentation
            ou diffusion, en tout ou partie, du contenu de ce site sans autorisation est interdite.
          </p>
        </div>

        <div className="legal__section">
          <h3>Billetterie</h3>
          <p>
            La vente de billets est gérée par la plateforme Weezevent SAS.<br />
            Les conditions générales de vente applicables sont celles de Weezevent,
            consultables sur <a href="https://weezevent.com/fr/cgv/" target="_blank" rel="noopener noreferrer">weezevent.com/fr/cgv</a>.
          </p>
        </div>

        <div className="legal__section">
          <h3>Politique de remboursement</h3>
          <p>
            Les billets ne sont ni échangeables ni remboursables, sauf en cas d'annulation
            de l'événement par l'organisateur. En cas d'annulation, le remboursement sera
            effectué via la plateforme Weezevent.
          </p>
        </div>

        <div className="legal__section">
          <h3>Protection des données personnelles</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez d'un droit d'accès, de rectification et de suppression de vos
            données personnelles. Les données collectées lors de l'achat de billets sont
            traitées par Weezevent et {legal.entreprise} uniquement dans le cadre de
            l'organisation de l'événement.
          </p>
          <p>
            Aucun cookie de tracking n'est utilisé sur ce site.
            Pour exercer vos droits, contactez-nous à <a href={`mailto:${legal.email}`}>{legal.email}</a>.
          </p>
        </div>

        <div className="legal__section">
          <h3>Responsabilité</h3>
          <p>
            {legal.entreprise} s'efforce de fournir des informations exactes et à jour
            sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude
            ou l'actualité des informations diffusées. {legal.entreprise} décline toute
            responsabilité pour tout dommage résultant de l'utilisation de ce site.
          </p>
        </div>

        <div className="legal__section">
          <h3>Droit applicable</h3>
          <p>
            Le présent site et ses mentions légales sont régis par le droit belge.
            En cas de litige, les tribunaux de Liège seront seuls compétents.
          </p>
        </div>

        <div className="legal__section">
          <h3>Contact</h3>
          <p>
            Email : <a href={`mailto:${socials.email}`}>{socials.email}</a><br />
            Instagram : <a href={socials.instagram} target="_blank" rel="noopener noreferrer">@sauroraa.be</a><br />
            Facebook : <a href={socials.facebook} target="_blank" rel="noopener noreferrer">SAURORAA</a>
          </p>
        </div>
      </div>
    </div>
  )
}
