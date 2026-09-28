import { certification } from "../data/certifications";

function Certifications() {
  const hasCertificateImage = Boolean(
    certification.certificateImage
  );

  const hasCredentialUrl = Boolean(
    certification.credentialUrl
  );

  return (
    <section
      id="certifications"
      className="
        bg-neutral-100
        px-6 py-24
        md:px-8
        lg:px-10
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-neutral-200
            bg-white
          "
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-neutral-100 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-neutral-200" />

          {/* Main Content */}
          <div
            className="
              relative grid
              min-h-[620px]
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* Left */}
            <div
              className="
                flex flex-col justify-between
                border-b border-neutral-200
                p-8
                md:p-12
                lg:border-b-0
                lg:border-r
                lg:p-16
              "
            >
              <div>
                <p
                  className="
                    text-xs font-medium uppercase
                    tracking-[0.22em]
                    text-neutral-400
                  "
                >
                  Certification
                </p>

                <h2
                  className="
                    mt-6
                    max-w-lg
                    text-5xl font-semibold
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-neutral-950
                    md:text-6xl
                  "
                >
                  Enterprise
                  <br />
                  Architect.
                </h2>

                <p
                  className="
                    mt-8
                    max-w-md
                    text-sm leading-7
                    text-neutral-500
                    md:text-base
                  "
                >
                  {certification.description}
                </p>
              </div>

              {/* Metadata */}
              <div className="mt-12">
                <div className="grid max-w-md grid-cols-2 gap-x-8 gap-y-8">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Credential
                    </p>

                    <p className="mt-2 text-sm font-medium text-neutral-900">
                      {certification.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Issued
                    </p>

                    <p className="mt-2 text-sm font-medium text-neutral-900">
                      {certification.year}
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Issued By
                    </p>

                    <p className="mt-2 text-sm font-medium text-neutral-900">
                      {certification.issuer}
                    </p>
                  </div>
                </div>

                {hasCredentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-10 inline-flex
                      items-center gap-3
                      rounded-full
                      bg-neutral-950
                      px-5 py-3
                      text-sm font-medium
                      text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-neutral-800
                    "
                  >
                    View Credential
                    <span className="text-base">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right */}
            <div className="relative flex items-center justify-center overflow-hidden bg-neutral-50 p-8 md:p-12 lg:p-16">
              {/* Background Grid */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-60
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to right,
                      rgba(0,0,0,0.035) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to bottom,
                      rgba(0,0,0,0.035) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Certificate */}
              <div
                className="
                  group relative
                  w-full max-w-[560px]
                  transition-transform
                  duration-700
                  ease-out
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                    absolute -inset-5
                    rounded-[2rem]
                    bg-black/[0.04]
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    aspect-[1.414/1]
                    overflow-hidden
                    rounded-xl
                    border border-neutral-200
                    bg-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    transition-shadow duration-700
                    group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.12)]
                  "
                >
                  {hasCertificateImage ? (
                    <img
                      src={certification.certificateImage}
                      alt={`${certification.title} certificate`}
                      className="
                        h-full w-full
                        object-cover
                      "
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                      <p
                        className="
                          text-[10px]
                          font-medium uppercase
                          tracking-[0.3em]
                          text-neutral-400
                        "
                      >
                        Certificate
                      </p>

                      <h3
                        className="
                          mt-5
                          text-2xl font-semibold
                          tracking-[-0.04em]
                          text-neutral-900
                          md:text-3xl
                        "
                      >
                        {certification.title}
                      </h3>

                      <div className="mt-6 h-px w-16 bg-neutral-300" />

                      <p className="mt-5 text-xs text-neutral-400">
                        {certification.issuer}
                      </p>

                      <p className="mt-2 text-xs text-neutral-400">
                        {certification.year}
                      </p>
                    </div>
                  )}
                </div>

                {/* Hover Label */}
                <div
                  className="
                    pointer-events-none
                    absolute bottom-5 right-5
                    flex items-center gap-2
                    rounded-full
                    bg-neutral-950
                    px-4 py-2.5
                    text-xs font-medium
                    text-white
                    opacity-0
                    translate-y-2
                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {hasCredentialUrl
                    ? "View Credential"
                    : "Certificate"}
                  <span>↗</span>
                </div>
              </div>

              {/* Number */}
              <span
                className="
                  absolute
                  bottom-8
                  right-8
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-neutral-300
                  md:bottom-10
                  md:right-10
                "
              >
                01 / 01
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;