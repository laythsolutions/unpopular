const poem = {
  title: 'The Space Between',
  author: 'Leon Guy',
  lines: [
    'Between thought and speech',
    'lies the space where meaning lives',
    'where words are born in silence',
    '',
    'Between knowing and being',
    'stretches the distance of a lifetime',
    'crossed in moments of clarity',
    '',
    'Between you and me',
    'exists the possibility of understanding',
    'the bridge we build together',
    'every time we truly listen',
    '',
    'In these spaces',
    'these holy distances',
    'we find what we were seeking:',
    'connection, presence, peace.',
  ],
}

export default function PoemHighlight() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="poem text-center">
            <p className="font-ui text-xs text-green uppercase tracking-widest mb-4">
              Poem of the Week
            </p>
            <h3 className="poem__title">{poem.title}</h3>
            <p className="text-sm text-gray-medium mb-8 font-ui">by {poem.author}</p>
            {poem.lines.map((line, index) => {
              if (line === '') {
                return <span key={index} className="poem__stanza" />
              }
              return (
                <p key={index} className="poem__line">
                  {line}
                </p>
              )
            })}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: '#e0ddd6' }}>
              <a
                href="/read"
                className="btn btn--secondary btn--small"
              >
                Read More Poetry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
