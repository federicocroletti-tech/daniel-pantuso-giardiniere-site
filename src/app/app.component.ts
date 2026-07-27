import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

const DISPLAY_PHONE = '+39 000 000 0000';
const PHONE_LINK = 'tel:+390000000000';
const WHATSAPP_NUMBER = '390000000000';
const SITE_URL = 'https://daniel-pantuso-giardiniere-site.onrender.com/';

const NAV_LINKS = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Lavori', href: '#lavori' },
  { label: 'Preventivo', href: '#preventivo' },
  { label: 'Contatti', href: '#contatti' },
] as const;

const SERVICES = [
  {
    title: 'Taglio prato e siepi',
    description:
      'Interventi ordinati e precisi per mantenere giardini, cortili e aree verdi sempre curati.',
  },
  {
    title: 'Manutenzione giardini',
    description: 'Cura periodica del verde per privati, condomini e piccole attività.',
  },
  {
    title: 'Pulizia aree verdi',
    description: 'Rimozione erbacce, foglie, ramaglie e sistemazione generale degli spazi esterni.',
  },
  {
    title: 'Potatura e sistemazione siepi',
    description: 'Taglio e cura di siepi, arbusti e piante ornamentali.',
  },
  {
    title: 'Interventi programmati',
    description: 'Manutenzioni ricorrenti settimanali, mensili o stagionali.',
  },
  {
    title: 'Sistemazione balconi e terrazzi',
    description: 'Supporto per piccoli spazi verdi, terrazzi, balconi e fioriere.',
  },
] as const;

const SERVICE_OPTIONS = [
  'Manutenzione giardino',
  'Taglio prato',
  'Potatura siepi',
  'Pulizia area verde',
  'Sistemazione balcone o terrazzo',
  'Altro intervento',
] as const;

const RECENT_WORKS = [
  {
    title: 'Taglio prato',
    description: 'Placeholder accessibile per una foto futura di taglio prato completato.',
  },
  {
    title: 'Potatura siepi',
    description: 'Placeholder accessibile per una foto futura di siepi potate e ordinate.',
  },
  {
    title: 'Pulizia area verde',
    description: 'Placeholder accessibile per una foto futura di cortile o giardino ripulito.',
  },
] as const;

const REASONS = [
  'Preventivi chiari',
  'Sopralluogo e comunicazione rapida',
  'Interventi ordinati',
  'Possibilità di manutenzione ricorrente',
  'Servizio per privati, condomini e piccole attività',
  'Zona Milano e limitrofi',
] as const;

const HERO_STATS = [
  { value: '5.0', label: 'valutazione' },
  { value: '24h', label: 'risposta rapida' },
  { value: 'MI', label: 'zona servita' },
] as const;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly navLinks = NAV_LINKS;
  protected readonly services = SERVICES;
  protected readonly serviceOptions = SERVICE_OPTIONS;
  protected readonly recentWorks = RECENT_WORKS;
  protected readonly reasons = REASONS;
  protected readonly heroStats = HERO_STATS;
  protected readonly displayPhone = DISPLAY_PHONE;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly siteUrl = SITE_URL;
  protected readonly whatsappQuickLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  protected readonly name = signal('');
  protected readonly phone = signal('');
  protected readonly area = signal('');
  protected readonly requestedService = signal<string>(SERVICE_OPTIONS[0]);
  protected readonly message = signal('');

  protected readonly whatsappMessage = computed(() =>
    [
      'Ciao Daniel, vorrei un preventivo.',
      `Nome: ${this.name().trim()}`,
      `Telefono: ${this.phone().trim()}`,
      `Zona: ${this.area().trim()}`,
      `Servizio: ${this.requestedService()}`,
      `Dettagli: ${this.message().trim()}`,
    ].join('\n'),
  );

  protected readonly whatsappLink = computed(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(this.whatsappMessage())}`,
  );

  protected updateName(event: Event): void {
    this.name.set(this.readFieldValue(event));
  }

  protected updatePhone(event: Event): void {
    this.phone.set(this.readFieldValue(event));
  }

  protected updateArea(event: Event): void {
    this.area.set(this.readFieldValue(event));
  }

  protected updateRequestedService(event: Event): void {
    this.requestedService.set(this.readFieldValue(event));
  }

  protected updateMessage(event: Event): void {
    this.message.set(this.readFieldValue(event));
  }

  private readFieldValue(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
  }
}
