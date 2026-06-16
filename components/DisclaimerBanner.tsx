interface DisclaimerBannerProps {
  variant?: 'landing' | 'chat';
}

export default function DisclaimerBanner({ variant = 'landing' }: DisclaimerBannerProps) {
  if (variant === 'chat') {
    return (
      <div className="bg-gold-muted border border-gold/30 rounded-lg px-4 py-2 text-center" role="alert">
        <p className="text-xs text-navy">
          RightsAI provides general legal information only and does not constitute legal advice.
          Always consult a qualified solicitor for matters specific to your situation.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-cream border border-cream-dark rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
      <h3 className="font-heading text-lg font-semibold text-navy mb-3">Important Disclaimer</h3>
      <p className="text-sm text-navy-light leading-relaxed">
        RightsAI provides general legal information only and does not constitute legal advice.
        While we strive to keep information accurate and up to date, laws change frequently. Always
        consult a qualified solicitor for matters specific to your situation. For free legal advice,
        you can contact{' '}
        <a
          href="https://www.citizensinformation.ie"
          className="text-gold underline hover:text-gold-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Citizens Information
        </a>{' '}
        or{' '}
        <a
          href="https://www.flac.ie"
          className="text-gold underline hover:text-gold-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          FLAC
        </a>
        .
      </p>
    </section>
  );
}