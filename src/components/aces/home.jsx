// style="--content:'Develop.';--padding:0.05em;--start-color:#007CF0;--end-color:#00DFD8">
// style={{marginRight: spacing + 'em'}}

export default function Content() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="py-10">
          <h1 className="text-center text-10xl font-black leading-none tracking-tighter my-10">
            <span className="animated-gradient-text_background__104Eo animated-gradient-text_background-1__2q1-A" style={{'--content':'Plan.', '--padding':'0.05em', '--start-color':'#007CF0', '--end-color':'#00DFD8', '--geist-foreground': '#F00'}}>
              <span className="animated-gradient-text_foreground__2kjjY animated-gradient-text_foreground-1__3O_nT">Plan.</span>
            </span>
            <span className="animated-gradient-text_background__104Eo animated-gradient-text_background-2__3r8da" style={{'--content':'Deploy.','--padding':'0.05em','--start-color':'#7928CA','--end-color':'#FF0080'}}>
              <span className="animated-gradient-text_foreground__2kjjY animated-gradient-text_foreground-2__BYeW7">Deploy.</span>
            </span>
            <span className="animated-gradient-text_background__104Eo animated-gradient-text_background-3__3Bvxj" style={{'--content':'Deliver.','--padding':'0.05em','--start-color':'#FF4D4D','--end-color':'#F9CB28'}}>
              <span className="animated-gradient-text_foreground__2kjjY animated-gradient-text_foreground-3__3Khgf">Deliver.</span>
            </span>
          </h1>
        </div>
      </div>
      <style jsx>{`
      .text-10xl {
        font-size:8rem;
      }
      *, :after, :before {
          box-sizing: inherit;
      }
      .animated-gradient-text_background__104Eo
      {
        position: relative;
        display: block;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      ._animated-gradient-text_background-1__2q1-A:before
      {
        -webkit-animation: animated-gradient-text_fade-background-1__qz_La 8s infinite;
        animation: animated-gradient-text_fade-background-1__qz_La 8s infinite;
      }

      ._animated-gradient-text_foreground-1__3O_nT
      {
        -webkit-animation: animated-gradient-text_fade-foreground-1__SuH6k 8s infinite;
        animation: animated-gradient-text_fade-foreground-1__SuH6k 8s infinite;
      }

      .animated-gradient-text_foreground__2kjjY
      {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-left: var(--padding);
        padding-right: var(--padding);
        background-image: linear-gradient(90deg,var(--start-color),var(--end-color));
        position: relative;
        z-index: 1;
      }

      .animated-gradient-text_background__104Eo:before
      {
        content: var(--content);
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        color: var(--geist-foreground);
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        padding-left: var(--padding);
        padding-right: var(--padding);
      }
      @-webkit-keyframes animated-gradient-text_fade-foreground-1__SuH6k{0%,16.667%,to{opacity:1}33.333%,83.333%{opacity:0}}
      @keyframes animated-gradient-text_fade-foreground-1__SuH6k{0%,16.667%,to{opacity:1}33.333%,83.333%{opacity:0}}
      @-webkit-keyframes animated-gradient-text_fade-background-1__qz_La{0%,16.667%,to{opacity:0}25%,91.667%{opacity:1}}
      @keyframes animated-gradient-text_fade-background-1__qz_La{0%,16.667%,to{opacity:0}25%,91.667%{opacity:1}}


      `}</style>
    </div>
  )
}