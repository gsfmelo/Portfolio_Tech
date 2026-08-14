export const projetos = [
  {
    id: 'prontoplay',
    titulo: 'ProntoPlay',
    estagio: 'colheita',
    tagEstagio: 'colheita · python',
    corDot: '#D9A441',
    destaque: true,
    descricaoCurta: 'automação de mídia (MoviePy/FFmpeg)',
    detalhes: 'Protótipo de software multimídia projetado para processar e otimizar vídeos de repórteres para as redes sociais. Unindo PAM (Production Asset Management) com engenharia de software, o sistema corta tempos de edição repetitiva drasticamente.',
    stack: ['Python', 'MoviePy', 'OpenCV', 'FFmpeg', 'OS/Shutil'],
    features: [
      'Monitoramento automatizado de diretórios de entrada.',
      'Processamento em lote (batch processing) de assets brutos.',
      'Integração de metadados e conversão via FFmpeg.'
    ],
    codeSnippet: `def process_video_asset(filepath, output_dir):
    try:
        # Load the raw footage
        clip = VideoFileClip(filepath)
        
        # Apply standard social media crop (9:16)
        cropped_clip = clip.crop(x1=100, y1=0, x2=820, y2=1280)
        
        # Overlay standard watermark & export
        final_asset = CompositeVideoClip([cropped_clip, watermark])
        final_asset.write_videofile(f"{output_dir}/ready_to_publish.mp4", codec="libx264")
        
        return True
    except Exception as e:
        log_error("Asset processing failed", e)
        return False`,
    link: 'https://github.com/geovannamelo'
  },
  {
    id: 'women-in-cloud',
    titulo: 'Women in Cloud / AWS',
    estagio: 'planta',
    tagEstagio: 'planta · nuvem',
    corDot: '#7CAE72',
    destaque: false,
    descricaoCurta: 'infraestrutura e inteligência gerativa',
    detalhes: 'Programa intensivo de formação em nuvem arquitetado pela AWS Academy, com foco em resiliência de dados, escalabilidade e aplicação de serviços gerenciados.',
    stack: ['AWS EC2', 'S3', 'IAM', 'GenAI Concepts'],
    features: [
      'Provisionamento de infraestrutura escalável.',
      'Gestão de políticas de acesso e segurança (IAM).',
      'Exploração de APIs de inteligência generativa.'
    ],
    codeSnippet: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::estufa-digital-assets"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::estufa-digital-assets/producao/*"
    }
  ]
}`,
    link: 'https://github.com/geovannamelo'
  },
  {
    id: 'decola-tech',
    titulo: 'Decola Tech Avanade',
    estagio: 'planta',
    tagEstagio: 'planta · bootcamp',
    corDot: '#5B8A57',
    destaque: false,
    descricaoCurta: 'imersão técnica e testes BDD',
    detalhes: 'Bootcamp voltado ao ecossistema corporativo. Durante os desafios, o foco principal foi a implementação de lógicas complexas de backend aliadas a uma sólida cultura de testes.',
    stack: ['BDD', 'Testes Unitários', 'SQL', 'Git Flow'],
    features: [
      'Criação de cenários de teste orientados a comportamento (BDD).',
      'Modelagem de banco de dados relacional.',
      'Resolução de problemas de lógica em maratona.'
    ],
    codeSnippet: `Feature: Video Asset Validation
  As a content producer
  I want the system to validate video formats
  So that invalid files are rejected early
  
  Scenario: Uploading a valid MP4 file
    Given the user selects the file "interview_raw.mp4"
    When the system checks the file format
    Then the status should be "ACCEPTED"
    And the process pipeline is triggered`,
    link: 'https://github.com/geovannamelo'
  }
];