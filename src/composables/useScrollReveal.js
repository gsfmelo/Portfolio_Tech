import { onMounted } from 'vue'

export function useScrollReveal(thresholdValue = 0.1) {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: thresholdValue })

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  })
}