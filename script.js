document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const closeBtn = document.querySelector('.close');

    // Translations object
    const translations = {
        en: {
            heroTitle: "True crypto ownership.<br>Powerful Web3 experiences",
            heroText: "Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.",
            buildingTrustTitle: "Building on Trust",
            buildingTrustText: "We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their dApps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details.",
            buildingTrustBtn: "Check out our Developer Docs",
            dappsTitle: "Browse a world of dApps",
            dappsText: "Access Web3 and DeFi opportunities via our dApp browser.",
            dappsBlockTitle: "Deposit crypto easily from exchanges",
            dappsBlockText: "Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.",
            dappsBtn: "Get started with deposits",
            zeroTrackingTitle: "Zero personal tracking",
            zeroTrackingText: "We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.",
            zeroBlockTitle: "True ownership of your crypto assets",
            zeroBlockText: "We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.",
            zeroBtn: "Get Started",
            securityFeature1: "Added security with encryption",
            securityFeature2: "Zero personal tracking",
            securityFeature3: "Proactive alerts for risky transactions",
            securityText: "Use our Encrypted Cloud Backup for increased wallet security.",
            learnMore: "Learn more about privacy & security",
            oneStopTitle: "Your one-stop, Web3 wallet",
            oneStopText: "Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.",
            oneStopBtn: "Download Mobile App",
            footerTitle: "Download Trust Wallet",
            footerText: "The most trusted & secure crypto wallet.",
            navWallet: "Wallet",
            navFeatures: "Features",
            navBuild: "Build",
            navSupport: "Support",
            navAbout: "About",
            langBtnText: "Language",
            downloadBtn: "Download"
        },
        zh: {
            heroTitle: "真正的加密货币所有权。<br>强大的Web3体验",
            heroText: "通过Trust Wallet释放您加密货币资产的力量，探索Web3世界。",
            buildingTrustTitle: "建立信任",
            buildingTrustText: "我们知道社区合作对每个人都有好处。我们的平台使区块链开发人员能够原生地构建他们的dApp和钱包，并与数百万用户连接，而无需担心低级实现细节。",
            buildingTrustBtn: "查看我们的开发者文档",
            dappsTitle: "浏览dApp世界",
            dappsText: "通过我们的dApp浏览器访问Web3和DeFi机会。",
            dappsBlockTitle: "轻松从交易所存款",
            dappsBlockText: "掌控您的加密货币。避免复杂步骤，直接从Binance和Coinbase等交易所存款到您的钱包。",
            dappsBtn: "开始存款",
            zeroTrackingTitle: "零个人跟踪",
            zeroTrackingText: "我们保护您的钱包，但不控制或访问您的私钥或秘密短语——只有您可以。",
            zeroBlockTitle: "您加密资产的真正所有权",
            zeroBlockText: "我们保护您的钱包，但不控制或访问您的私钥或秘密短语——只有您可以。",
            zeroBtn: "开始使用",
            securityFeature1: "通过加密增强安全性",
            securityFeature2: "零个人跟踪",
            securityFeature3: "针对风险交易的主动警报",
            securityText: "使用我们的加密云备份来提高钱包安全性。",
            learnMore: "了解更多隐私与安全信息",
            oneStopTitle: "您的全方位Web3钱包",
            oneStopText: "购买、出售和交换加密货币，赚取奖励，管理NFT，并发现DApp，一切都在一个地方。",
            oneStopBtn: "下载移动应用",
            footerTitle: "下载Trust Wallet",
            footerText: "最值得信赖且安全的加密钱包。",
            navWallet: "钱包",
            navFeatures: "功能",
            navBuild: "构建",
            navSupport: "支持",
            navAbout: "关于",
            langBtnText: "语言",
            downloadBtn: "下载"
        },
        fr: {
            heroTitle: "Vraie propriété des cryptomonnaies.<br>Expériences Web3 puissantes",
            heroText: "Déverrouillez le potentiel de vos actifs en cryptomonnaies et explorez le monde de Web3 avec Trust Wallet.",
            buildingTrustTitle: "Construction sur la confiance",
            buildingTrustText: "Nous savons que travailler ensemble en communauté profite à tous. Notre plateforme permet aux développeurs blockchain de créer leurs dApps et portefeuilles nativement et de se connecter à des millions d'utilisateurs, sans se soucier des détails d'implémentation de bas niveau.",
            buildingTrustBtn: "Consultez nos documents pour développeurs",
            dappsTitle: "Explorez un monde de dApps",
            dappsText: "Accédez aux opportunités Web3 et DeFi via notre navigateur d'applications décentralisées.",
            dappsBlockTitle: "Déposez facilement des cryptomonnaies depuis des échanges",
            dappsBlockText: "Prenez le contrôle de vos cryptomonnaies. Évitez les étapes compliquées et déposez directement dans votre portefeuille depuis des échanges comme Binance et Coinbase.",
            dappsBtn: "Commencer les dépôts",
            zeroTrackingTitle: "Zéro suivi personnel",
            zeroTrackingText: "Nous sécurisons votre portefeuille, mais nous n'avons pas le contrôle ni l'accès à vos clés privées ou à votre phrase secrète - seul vous les avez.",
            zeroBlockTitle: "Vraie propriété de vos actifs crypto",
            zeroBlockText: "Nous sécurisons votre portefeuille, mais nous n'avons pas le contrôle ni l'accès à vos clés privées ou à votre phrase secrète - seul vous les avez.",
            zeroBtn: "Commencer",
            securityFeature1: "Sécurité renforcée avec le chiffrement",
            securityFeature2: "Zéro suivi personnel",
            securityFeature3: "Alertes proactives pour les transactions risquées",
            securityText: "Utilisez notre sauvegarde cloud chiffrée pour une sécurité accrue de votre portefeuille.",
            learnMore: "En savoir plus sur la confidentialité et la sécurité",
            oneStopTitle: "Votre portefeuille Web3 tout-en-un",
            oneStopText: "Achetez, vendez et échangez des cryptomonnaies, gagnez des récompenses, gérez vos NFT et découvrez des dApps, tout en un seul endroit.",
            oneStopBtn: "Télécharger l'application mobile",
            footerTitle: "Téléchargez Trust Wallet",
            footerText: "Le portefeuille crypto le plus fiable et sécurisé.",
            navWallet: "Portefeuille",
            navFeatures: "Fonctionnalités",
            navBuild: "Construire",
            navSupport: "Support",
            navAbout: "À propos",
            langBtnText: "Langue",
            downloadBtn: "Télécharger"
        },
        de: {
            heroTitle: "Echtes Krypto-Besitzrecht.<br>Leistungsstarke Web3-Erfahrungen",
            heroText: "Entfesseln Sie die Kraft Ihrer Kryptowährungsvermögen und erkunden Sie die Welt von Web3 mit Trust Wallet.",
            buildingTrustTitle: "Auf Vertrauen aufbauen",
            buildingTrustText: "Wir wissen, dass Zusammenarbeit in einer Gemeinschaft für alle besser ist. Unsere Plattform ermöglicht es Blockchain-Entwicklern, ihre dApps und Wallets nativ zu erstellen und sich mit Millionen von Nutzern zu verbinden, ohne sich um die Details der niedrigen Implementierung kümmern zu müssen.",
            buildingTrustBtn: "Schauen Sie sich unsere Entwicklerdokumente an",
            dappsTitle: "Durchstöbern Sie eine Welt von dApps",
            dappsText: "Greifen Sie über unseren dApp-Browser auf Web3- und DeFi-Möglichkeiten zu.",
            dappsBlockTitle: "Deponieren Sie Krypto einfach von Börsen",
            dappsBlockText: "Übernehmen Sie die Kontrolle über Ihr Krypto. Vermeiden Sie komplizierte Schritte und deponieren Sie direkt von Börsen wie Binance und Coinbase in Ihr Wallet.",
            dappsBtn: "Mit Einzahlungen beginnen",
            zeroTrackingTitle: "Keine persönliche Verfolgung",
            zeroTrackingText: "Wir sichern Ihr Wallet, haben aber keinen Zugriff auf Ihre privaten Schlüssel oder Ihre geheime Phrase - nur Sie haben das.",
            zeroBlockTitle: "Echtes Eigentum an Ihren Krypto-Assets",
            zeroBlockText: "Wir sichern Ihr Wallet, haben aber keinen Zugriff auf Ihre privaten Schlüssel oder Ihre geheime Phrase - nur Sie haben das.",
            zeroBtn: "Loslegen",
            securityFeature1: "Erhöhte Sicherheit durch Verschlüsselung",
            securityFeature2: "Keine persönliche Verfolgung",
            securityFeature3: "Proaktive Warnungen bei riskanten Transaktionen",
            securityText: "Nutzen Sie unsere verschlüsselte Cloud-Sicherung für eine erhöhte Wallet-Sicherheit.",
            learnMore: "Erfahren Sie mehr über Datenschutz und Sicherheit",
            oneStopTitle: "Ihr All-in-One-Web3-Wallet",
            oneStopText: "Kaufen, verkaufen und tauschen Sie Krypto, verdienen Sie Belohnungen, verwalten Sie NFTs und entdecken Sie dApps, alles an einem Ort.",
            oneStopBtn: "Mobile App herunterladen",
            footerTitle: "Trust Wallet herunterladen",
            footerText: "Die vertrauenswürdigste und sicherste Krypto-Wallet.",
            navWallet: "Wallet",
            navFeatures: "Funktionen",
            navBuild: "Erstellen",
            navSupport: "Support",
            navAbout: "Über",
            langBtnText: "Sprache",
            downloadBtn: "Herunterladen"
        },
        sg: {
            heroTitle: "True crypto ownership.<br>Powerful Web3 experiences",
            heroText: "Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.",
            buildingTrustTitle: "Building on Trust",
            buildingTrustText: "We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their dApps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details.",
            buildingTrustBtn: "Check out our Developer Docs",
            dappsTitle: "Browse a world of dApps",
            dappsText: "Access Web3 and DeFi opportunities via our dApp browser.",
            dappsBlockTitle: "Deposit crypto easily from exchanges",
            dappsBlockText: "Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.",
            dappsBtn: "Get started with deposits",
            zeroTrackingTitle: "Zero personal tracking",
            zeroTrackingText: "We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.",
            zeroBlockTitle: "True ownership of your crypto assets",
            zeroBlockText: "We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.",
            zeroBtn: "Get Started",
            securityFeature1: "Added security with encryption",
            securityFeature2: "Zero personal tracking",
            securityFeature3: "Proactive alerts for risky transactions",
            securityText: "Use our Encrypted Cloud Backup for increased wallet security.",
            learnMore: "Learn more about privacy & security",
            oneStopTitle: "Your one-stop, Web3 wallet",
            oneStopText: "Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.",
            oneStopBtn: "Download Mobile App",
            footerTitle: "Download Trust Wallet",
            footerText: "The most trusted & secure crypto wallet.",
            navWallet: "Wallet",
            navFeatures: "Features",
            navBuild: "Build",
            navSupport: "Support",
            navAbout: "About",
            langBtnText: "Language",
            downloadBtn: "Download"
        },
        ja: {
            heroTitle: "真の暗号資産の所有権。<br>強力なWeb3体験",
            heroText: "Trust Walletで暗号資産の力を解き放ち、Web3の世界を探求してください。",
            buildingTrustTitle: "信頼の構築",
            buildingTrustText: "コミュニティとして協力することがすべての人にとってより良いと理解しています。弊社のプラットフォームは、ブロックチェーン開発者がdAppやウォレットをネイティブに構築し、低レベルの実装の詳細を気にせずに何百万人ものユーザーと接続できるようにします。",
            buildingTrustBtn: "開発者ドキュメントを確認",
            dappsTitle: "dAppの世界を閲覧",
            dappsText: "dAppブラウザ経由でWeb3およびDeFiの機会にアクセス。",
            dappsBlockTitle: "取引所から簡単に暗号資産を入金",
            dappsBlockText: "暗号資産をコントロール。複雑な手順を避け、BinanceやCoinbaseなどの取引所から直接ウォレットに入金。",
            dappsBtn: "入金を開始",
            zeroTrackingTitle: "ゼロパーソナルトラッキング",
            zeroTrackingText: "ウォレットを保護しますが、秘密鍵や秘密フレーズの制御やアクセス権は持たず、只有あなたが持っています。",
            zeroBlockTitle: "暗号資産の真の所有権",
            zeroBlockText: "ウォレットを保護しますが、秘密鍵や秘密フレーズの制御やアクセス権は持たず、只有あなたが持っています。",
            zeroBtn: "開始",
            securityFeature1: "暗号化による追加セキュリティ",
            securityFeature2: "ゼロパーソナルトラッキング",
            securityFeature3: "リスクの高い取引に対するプロアクティブなアラート",
            securityText: "ウォレットのセキュリティを向上させるために暗号化クラウドバックアップを使用。",
            learnMore: "プライバシーとセキュリティについてさらに学ぶ",
            oneStopTitle: "あなたのオールインワンWeb3ウォレット",
            oneStopText: "暗号資産の購入、売却、交換、報酬の獲得、NFTの管理、DAppの発見をすべて1か所で。",
            oneStopBtn: "モバイルアプリをダウンロード",
            footerTitle: "Trust Walletをダウンロード",
            footerText: "最も信頼され、セキュアな暗号資産ウォレット。",
            navWallet: "ウォレット",
            navFeatures: "機能",
            navBuild: "構築",
            navSupport: "サポート",
            navAbout: "概要",
            langBtnText: "言語",
            downloadBtn: "ダウンロード"
        },
        ko: {
            heroTitle: "진정한 암호화폐 소유권.<br>강력한 Web3 경험",
            heroText: "Trust Wallet으로 암호화폐 자산의 잠재력을 열고 Web3 세계를 탐험하세요.",
            buildingTrustTitle: "신뢰 구축",
            buildingTrustText: "커뮤니티로서 함께 일하는 것이 모두에게 더 나은 결과를 가져온다는 것을 알고 있습니다. 저희 플랫폼은 블록체인 개발자가 dApp와 지갑을 네이티브로 구축하고, 저수준 구현 세부 사항에 신경 쓰지 않고 수백만 명의 사용자와 연결할 수 있도록 합니다.",
            buildingTrustBtn: "개발자 문서 확인",
            dappsTitle: "dApp 세계 탐색",
            dappsText: "dApp 브라우저를 통해 Web3 및 DeFi 기회를 이용하세요.",
            dappsBlockTitle: "거래소에서 쉽게 암호화폐 입금",
            dappsBlockText: "암호화폐를 제어하세요. 복잡한 단계를 피하고 Binance 및 Coinbase와 같은 거래소에서 직접 지갑에 입금하세요.",
            dappsBtn: "입금을 시작하세요",
            zeroTrackingTitle: "제로 개인 추적",
            zeroTrackingText: "지갑을 보호하지만 개인 키나 비밀 문구에 대한 제어권이나 접근 권한은 없으며, 오직 당신만이 가지고 있습니다.",
            zeroBlockTitle: "암호화폐 자산의 진정한 소유권",
            zeroBlockText: "지갑을 보호하지만 개인 키나 비밀 문구에 대한 제어권이나 접근 권한은 없으며, 오직 당신만이 가지고 있습니다.",
            zeroBtn: "시작하기",
            securityFeature1: "암호화로 강화된 보안",
            securityFeature2: "제로 개인 추적",
            securityFeature3: "위험 거래에 대한 사전 경고",
            securityText: "암호화된 클라우드 백업을 사용하여 지갑 보안을 강화하세요.",
            learnMore: "개인정보 보호 및 보안에 대해 더 알아보기",
            oneStopTitle: "당신의 올인원 Web3 지갑",
            oneStopText: "암호화폐 구매, 판매, 교환, 보상 획득, NFT 관리, DApp 발견을 한 곳에서.",
            oneStopBtn: "모바일 앱 다운로드",
            footerTitle: "Trust Wallet 다운로드",
            footerText: "가장 신뢰할 수 있고 안전한 암호화폐 지갑.",
            navWallet: "지갑",
            navFeatures: "기능",
            navBuild: "빌드",
            navSupport: "지원",
            navAbout: "소개",
            langBtnText: "언어",
            downloadBtn: "다운로드"
        },
        pt: {
            heroTitle: "Verdadeira posse de criptomoedas.<br>Experiências Web3 poderosas",
            heroText: "Desbloqueie o poder dos seus ativos de criptomoedas e explore o mundo do Web3 com a Trust Wallet.",
            buildingTrustTitle: "Construindo com Confiança",
            buildingTrustText: "Sabemos que trabalhar juntos como uma comunidade é melhor para todos. Nossa plataforma permite que desenvolvedores de blockchain criem seus dApps e carteiras de forma nativa e se conectem a milhões de usuários, sem se preocupar com os detalhes de implementação de baixo nível.",
            buildingTrustBtn: "Confira nossos Documentos para Desenvolvedores",
            dappsTitle: "Navegue por um mundo de dApps",
            dappsText: "Acesse oportunidades Web3 e DeFi por meio do nosso navegador de dApps.",
            dappsBlockTitle: "Deposite criptomoedas facilmente de exchanges",
            dappsBlockText: "Assuma o controle do seu cripto. Evite passos complicados e deposite diretamente na sua carteira a partir de exchanges como Binance e Coinbase.",
            dappsBtn: "Comece com depósitos",
            zeroTrackingTitle: "Zero rastreamento pessoal",
            zeroTrackingText: "Nós protegemos sua carteira, mas não controlamos nem temos acesso às suas chaves privadas ou frase secreta - somente você tem.",
            zeroBlockTitle: "Verdadeira posse dos seus ativos cripto",
            zeroBlockText: "Nós protegemos sua carteira, mas não controlamos nem temos acesso às suas chaves privadas ou frase secreta - somente você tem.",
            zeroBtn: "Começar",
            securityFeature1: "Segurança adicional com criptografia",
            securityFeature2: "Zero rastreamento pessoal",
            securityFeature3: "Alertas proativos para transações arriscadas",
            securityText: "Use nosso Backup na Nuvem Criptografado para maior segurança da carteira.",
            learnMore: "Saiba mais sobre privacidade e segurança",
            oneStopTitle: "Sua carteira Web3 tudo-em-um",
            oneStopText: "Compre, venda e troque criptomoedas, ganhe recompensas, gerencie NFTs e descubra dApps, tudo em um só lugar.",
            oneStopBtn: "Baixar Aplicativo Móvel",
            footerTitle: "Baixe o Trust Wallet",
            footerText: "A carteira de criptomoedas mais confiável e segura.",
            navWallet: "Carteira",
            navFeatures: "Recursos",
            navBuild: "Construir",
            navSupport: "Suporte",
            navAbout: "Sobre",
            langBtnText: "Idioma",
            downloadBtn: "Baixar"
        },
        ru: {
            heroTitle: "Настоящее владение криптовалютой.<br>Мощные Web3-опыт",
            heroText: "Освободите потенциал ваших криптоактивов и исследуйте мир Web3 с Trust Wallet.",
            buildingTrustTitle: "Создание доверия",
            buildingTrustText: "Мы знаем, что совместная работа сообщества лучше для всех. Наша платформа позволяет разработчикам блокчейнов создавать свои dApps и кошельки нативно и подключаться к миллионам пользователей, не беспокоясь о деталях низкоуровневой реализации.",
            buildingTrustBtn: "Посмотреть наши документации для разработчиков",
            dappsTitle: "Просмотр мира dApps",
            dappsText: "Получайте доступ к возможностям Web3 и DeFi через наш браузер dApps.",
            dappsBlockTitle: "Легко вносите криптовалюту с бирж",
            dappsBlockText: "Возьмите контроль над своей криптовалютой. Избегайте сложных шагов и вносите средства напрямую в свой кошелек с бирж, таких как Binance и Coinbase.",
            dappsBtn: "Начать с депозитов",
            zeroTrackingTitle: "Нулевое личное отслеживание",
            zeroTrackingText: "Мы защищаем ваш кошелек, но не контролируем и не имеем доступа к вашим приватным ключам или секретной фразе - только вы.",
            zeroBlockTitle: "Настоящее владение вашими криптоактивами",
            zeroBlockText: "Мы защищаем ваш кошелек, но не контролируем и не имеем доступа к вашим приватным ключам или секретной фразе - только вы.",
            zeroBtn: "Начать",
            securityFeature1: "Дополнительная безопасность с шифрованием",
            securityFeature2: "Нулевое личное отслеживание",
            securityFeature3: "Проактивные уведомления о рискованных транзакциях",
            securityText: "Используйте нашу зашифрованную облачную резервную копию для повышения безопасности кошелька.",
            learnMore: "Узнайте больше о конфиденциальности и безопасности",
            oneStopTitle: "Ваш универсальный Web3-кошелек",
            oneStopText: "Покупайте, продавайте и обменивайте криптовалюту, зарабатывайте награды, управляйте NFT и открывайте dApps, все в одном месте.",
            oneStopBtn: "Скачать мобильное приложение",
            footerTitle: "Скачайте Trust Wallet",
            footerText: "Самый надежный и безопасный криптокошелек.",
            navWallet: "Кошелек",
            navFeatures: "Функции",
            navBuild: "Создание",
            navSupport: "Поддержка",
            navAbout: "О нас",
            langBtnText: "Язык",
            downloadBtn: "Скачать"
        },
        es: {
            heroTitle: "Verdadera propiedad de criptomonedas.<br>Experiencias Web3 potentes",
            heroText: "Desbloquee el poder de sus activos de criptomonedas y explore el mundo de Web3 con Trust Wallet.",
            buildingTrustTitle: "Construyendo con confianza",
            buildingTrustText: "Sabemos que trabajar juntos como comunidad es mejor para todos. Nuestra plataforma permite a los desarrolladores de blockchain crear sus dApps y carteras de forma nativa y conectarse con millones de usuarios, sin preocuparse por los detalles de implementación de bajo nivel.",
            buildingTrustBtn: "Consulte nuestros documentos para desarrolladores",
            dappsTitle: "Explore un mundo de dApps",
            dappsText: "Acceda a oportunidades Web3 y DeFi a través de nuestro navegador de dApps.",
            dappsBlockTitle: "Deposite criptomonedas fácilmente desde exchanges",
            dappsBlockText: "Tome el control de su cripto. Evite pasos complicados y deposite directamente en su cartera desde exchanges como Binance y Coinbase.",
            dappsBtn: "Comience con depósitos",
            zeroTrackingTitle: "Cero seguimiento personal",
            zeroTrackingText: "Protegemos su cartera, pero no controlamos ni tenemos acceso a sus claves privadas ni a su frase secreta - solo usted las tiene.",
            zeroBlockTitle: "Verdadera propiedad de sus activos cripto",
            zeroBlockText: "Protegemos su cartera, pero no controlamos ni tenemos acceso a sus claves privadas ni a su frase secreta - solo usted las tiene.",
            zeroBtn: "Comenzar",
            securityFeature1: "Seguridad adicional con cifrado",
            securityFeature2: "Cero seguimiento personal",
            securityFeature3: "Alertas proactivas para transacciones arriesgadas",
            securityText: "Use nuestra copia de seguridad en la nube cifrada para una mayor seguridad de su cartera.",
            learnMore: "Aprenda más sobre privacidad y seguridad",
            oneStopTitle: "Su cartera Web3 todo-en-uno",
            oneStopText: "Compre, venda e intercambie criptomonedas, gane recompensas, gestione NFTs y descubra dApps, todo en un solo lugar.",
            oneStopBtn: "Descargar la aplicación móvil",
            footerTitle: "Descargue Trust Wallet",
            footerText: "La cartera de criptomonedas más confiable y segura.",
            navWallet: "Cartera",
            navFeatures: "Características",
            navBuild: "Construir",
            navSupport: "Soporte",
            navAbout: "Acerca de",
            langBtnText: "Idioma",
            downloadBtn: "Descargar"
        },
        tr: {
            heroTitle: "Gerçek kripto sahipliği.<br>Güçlü Web3 deneyimleri",
            heroText: "Kripto varlıklarınızın gücünü açığa çıkarın ve Trust Wallet ile Web3 dünyasını keşfedin.",
            buildingTrustTitle: "Güvene Dayalı İnşaat",
            buildingTrustText: "Birlikte çalışmanın bir topluluk olarak herkes için daha iyi olduğunu biliyoruz. Platformumuz, blockchain geliştiricilerinin dApp'lerini ve cüzdanlarını yerel olarak oluşturmasına ve milyonlarca kullanıcıyla bağlantı kurmasına olanak tanır, düşük seviyeli uygulama detaylarıyla uğraşmadan.",
            buildingTrustBtn: "Geliştirici Belgelerimizi Görüntüleyin",
            dappsTitle: "dApp dünyasını keşfedin",
            dappsText: "dApp tarayıcımız aracılığıyla Web3 ve DeFi fırsatlarına erişin.",
            dappsBlockTitle: "Borsalardan kolayca kripto yatırın",
            dappsBlockText: "Kriptonuzu kontrol altına alın. Karmaşık adımları atlayın ve Binance ve Coinbase gibi borsalardan doğrudan cüzdanınıza yatırım yapın.",
            dappsBtn: "Yatırımlara başlayın",
            zeroTrackingTitle: "Sıfır kişisel izleme",
            zeroTrackingText: "Cüzdanınızı güvence altına alıyoruz, ancak özel anahtarlarınıza veya gizli ifadenize erişimimiz veya kontrolümüz yok - sadece siz sahipsiniz.",
            zeroBlockTitle: "Kripto varlıklarınıza gerçek sahiplik",
            zeroBlockText: "Cüzdanınızı güvence altına alıyoruz, ancak özel anahtarlarınıza veya gizli ifadenize erişimimiz veya kontrolümüz yok - sadece siz sahipsiniz.",
            zeroBtn: "Başlayın",
            securityFeature1: "Şifreleme ile ek güvenlik",
            securityFeature2: "Sıfır kişisel izleme",
            securityFeature3: "Riskli işlemler için proaktif uyarılar",
            securityText: "Cüzdan güvenliğinizi artırmak için Şifreli Bulut Yedeklememizi kullanın.",
            learnMore: "Gizlilik ve güvenlik hakkında daha fazla bilgi edinin",
            oneStopTitle: "Tek durak Web3 cüzdanınız",
            oneStopText: "Kripto satın alın, satın ve değiştirin, ödüller kazanın, NFT'leri yönetin ve dApp'leri keşfedin, hepsi tek bir yerde.",
            oneStopBtn: "Mobil Uygulamayı İndirin",
            footerTitle: "Trust Wallet'ı İndirin",
            footerText: "En güvenilir ve güvenli kripto cüzdanı.",
            navWallet: "Cüzdan",
            navFeatures: "Özellikler",
            navBuild: "İnşa Et",
            navSupport: "Destek",
            navAbout: "Hakkında",
            langBtnText: "Dil",
            downloadBtn: "İndir"
        },
        uk: {
            heroTitle: "Справжнє володіння криптовалютою.<br>Потужні Web3-досвіди",
            heroText: "Розкрийте потенціал ваших криптоактивів та досліджуйте світ Web3 з Trust Wallet.",
            buildingTrustTitle: "Будівництво на довірі",
            buildingTrustText: "Ми знаємо, що спільна робота громади краще для всіх. Наша платформа дозволяє розробникам блокчейну створювати свої dApp та гаманці нативно та підключатися до мільйонів користувачів, не турбуючись про деталі низькорівневої реалізації.",
            buildingTrustBtn: "Переглянути наші документи для розробників",
            dappsTitle: "Огляд світу dApp",
            dappsText: "Отримуйте доступ до можливостей Web3 та DeFi через наш браузер dApp.",
            dappsBlockTitle: "Легко поповнюйте криптовалюту з бірж",
            dappsBlockText: "Контролюйте свою криптовалюту. Уникайте складних кроків і поповнюйте свій гаманець напряму з бірж, таких як Binance і Coinbase.",
            dappsBtn: "Розпочати з депозитів",
            zeroTrackingTitle: "Нульове особисте відстеження",
            zeroTrackingText: "Ми захищаємо ваш гаманець, але не контролюємо і не маємо доступу до ваших приватних ключів чи секретної фрази — лише ви.",
            zeroBlockTitle: "Справжнє володіння вашими криптоактивами",
            zeroBlockText: "Ми захищаємо ваш гаманець, але не контролюємо і не маємо доступу до ваших приватних ключів чи секретної фрази — лише ви.",
            zeroBtn: "Розпочати",
            securityFeature1: "Додаткова безпека з шифруванням",
            securityFeature2: "Нульове особисте відстеження",
            securityFeature3: "Проактивні сповіщення про ризиковані транзакції",
            securityText: "Використовуйте нашу зашифровану хмарну резервну копію для підвищення безпеки гаманця.",
            learnMore: "Дізнайтесь більше про конфіденційність та безпеку",
            oneStopTitle: "Ваш універсальний Web3-гаманець",
            oneStopText: "Купуйте, продавайте та обмінюйте криптовалюту, заробляйте нагороди, управляйте NFT та відкривайте dApp, все в одному місці.",
            oneStopBtn: "Завантажте мобільний додаток",
            footerTitle: "Завантажте Trust Wallet",
            footerText: "Найнадійніший та безпечний криптогаманець.",
            navWallet: "Гаманець",
            navFeatures: "Функції",
            navBuild: "Створити",
            navSupport: "Підтримка",
            navAbout: "Про нас",
            langBtnText: "Мова",
            downloadBtn: "Завантажити"
        },
        vi: {
            heroTitle: "Sở hữu thực sự tiền mã hóa.<br>Trải nghiệm Web3 mạnh mẽ",
            heroText: "Mở khóa sức mạnh của tài sản tiền mã hóa của bạn và khám phá thế giới Web3 với Trust Wallet.",
            buildingTrustTitle: "Xây dựng dựa trên niềm tin",
            buildingTrustText: "Chúng tôi biết rằng làm việc cùng nhau như một cộng đồng là tốt hơn cho tất cả mọi người. Nền tảng của chúng tôi cho phép các nhà phát triển blockchain xây dựng dApp và ví của họ một cách bản địa và kết nối với hàng triệu người dùng, mà không phải lo lắng về các chi tiết thực thi cấp thấp.",
            buildingTrustBtn: "Xem tài liệu dành cho nhà phát triển của chúng tôi",
            dappsTitle: "Duyệt qua thế giới dApp",
            dappsText: "Truy cập các cơ hội Web3 và DeFi qua trình duyệt dApp của chúng tôi.",
            dappsBlockTitle: "Gửi tiền mã hóa dễ dàng từ sàn giao dịch",
            dappsBlockText: "Kiểm soát tiền mã hóa của bạn. Tránh các bước phức tạp và gửi tiền trực tiếp vào ví của bạn từ các sàn như Binance và Coinbase.",
            dappsBtn: "Bắt đầu với tiền gửi",
            zeroTrackingTitle: "Không theo dõi cá nhân",
            zeroTrackingText: "Chúng tôi bảo vệ ví của bạn, nhưng không kiểm soát hoặc truy cập vào khóa riêng tư hoặc cụm từ bí mật của bạn - chỉ có bạn.",
            zeroBlockTitle: "Sở hữu thực sự tài sản tiền mã hóa của bạn",
            zeroBlockText: "Chúng tôi bảo vệ ví của bạn, nhưng không kiểm soát hoặc truy cập vào khóa riêng tư hoặc cụm từ bí mật của bạn - chỉ có bạn.",
            zeroBtn: "Bắt đầu",
            securityFeature1: "Bảo mật bổ sung với mã hóa",
            securityFeature2: "Không theo dõi cá nhân",
            securityFeature3: "Cảnh báo chủ động cho các giao dịch rủi ro",
            securityText: "Sử dụng Sao lưu Mây được Mã hóa của chúng tôi để tăng cường bảo mật ví.",
            learnMore: "Tìm hiểu thêm về quyền riêng tư và bảo mật",
            oneStopTitle: "Ví Web3 tất cả trong một của bạn",
            oneStopText: "Mua, bán và hoán đổi tiền mã hóa, kiếm phần thưởng, quản lý NFT và khám phá dApp, tất cả trong một nơi.",
            oneStopBtn: "Tải ứng dụng di động",
            footerTitle: "Tải Trust Wallet",
            footerText: "Ví tiền mã hóa đáng tin cậy và an toàn nhất.",
            navWallet: "Ví",
            navFeatures: "Tính năng",
            navBuild: "Xây dựng",
            navSupport: "Hỗ trợ",
            navAbout: "Về",
            langBtnText: "Ngôn ngữ",
            downloadBtn: "Tải xuống"
        }
    };

    // Function to translate page
    function translatePage(lang) {
        const t = translations[lang];

        // Hero section
        document.querySelector('.hero-text h1').innerHTML = t.heroTitle;
        document.querySelector('.hero-text p').textContent = t.heroText;

        // Building Trust section
        document.querySelector('.building-trust h2').textContent = t.buildingTrustTitle;
        document.querySelector('.building-trust p').textContent = t.buildingTrustText;
        document.querySelector('.building-trust .btn-white').textContent = t.buildingTrustBtn;

        // dApps section
        document.querySelector('.dapps-section h2').textContent = t.dappsTitle;
        document.querySelector('.dapps-section p').textContent = t.dappsText;
        document.querySelector('.block-text h3').textContent = t.dappsBlockTitle;
        document.querySelector('.block-text p').textContent = t.dappsBlockText;
        document.querySelector('.dapps-section .btn-outline').textContent = t.dappsBtn;

        // Zero Tracking section
        document.querySelector('.zero-tracking-section h2').textContent = t.zeroTrackingTitle;
        document.querySelector('.zero-tracking-section p').textContent = t.zeroTrackingText;
        document.querySelector('.zero-tracking-section .block-text h3').textContent = t.zeroBlockTitle;
        document.querySelector('.zero-tracking-section .block-text p').textContent = t.zeroBlockText;
        document.querySelector('.zero-tracking-section .btn-full').textContent = t.zeroBtn;

        // Security Features
        document.querySelectorAll('.feature h4')[0].textContent = t.securityFeature1;
        document.querySelectorAll('.feature h4')[1].textContent = t.securityFeature2;
        document.querySelectorAll('.feature h4')[2].textContent = t.securityFeature3;
        document.querySelectorAll('.feature p')[0].textContent = t.securityText;
        document.querySelector('.learn-btn').textContent = t.learnMore;

        // One Stop section
        document.querySelector('.text-block h2').textContent = t.oneStopTitle;
        document.querySelector('.text-block p').textContent = t.oneStopText;
        document.querySelector('.text-block .btn-full').textContent = t.oneStopBtn;

        // Footer section
        document.querySelector('.download-section h2').textContent = t.footerTitle;
        document.querySelector('.download-section p').textContent = t.footerText;

        // Navigation
        document.querySelectorAll('.nav-links a')[0].textContent = t.navWallet;
        document.querySelectorAll('.nav-links a')[1].textContent = t.navFeatures;
        document.querySelectorAll('.nav-links a')[2].textContent = t.navBuild;
        document.querySelectorAll('.nav-links a')[3].textContent = t.navSupport;
        document.querySelectorAll('.nav-links a')[4].textContent = t.navAbout;

        // Language and Download buttons
        document.querySelector('.lang-btn span').textContent = t.langBtnText;
        document.querySelector('.download-btn').textContent = t.downloadBtn;
    }

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Language dropdown
    langBtn.addEventListener('click', () => {
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    closeBtn.addEventListener('click', () => {
        langDropdown.style.display = 'none';
    });

    // Language selection
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            translatePage(lang);
            langDropdown.style.display = 'none';
            langBtn.querySelector('span').textContent = link.textContent.split(' ')[1]; // Update language button text
        });
    });

    // Set default language (English)
    translatePage('en');
});
