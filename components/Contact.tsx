import Section from "./Section.tsx"

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div class="text-center">
        <div class="my-8">お問い合わせはTwitterのDMにてお願いします。</div>

        <a href="https://twitter.com/harutaka_ini" class="inline-block mx-auto" target="_blank">
          <img src="/img/harutaka_icon_360.png" alt="avatar" class="w-40 h-40" />
          <div class="">@harutaka_ini</div>
        </a>
      </div>
    </Section>
  )
}

export default Contact