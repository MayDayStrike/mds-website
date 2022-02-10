const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== "production") {
    return null
  }

  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
            w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
            m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://mds.headcount.guru/mtc.js','mt');

        mt('send', 'pageview');
        `,
      }}
    />,
  ])
}
