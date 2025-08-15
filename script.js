// script.js
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const close = document.querySelector('.close');
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const langSpan = document.querySelector('.lang-btn span');

    // Language translations
    const translations = {
        en: {
            title: 'True crypto ownership. Powerful Web3 experiences',
            subtitle: 'Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.',
            nav: {
                wallet: 'Wallet',
                features: 'Features',
                build: 'Build',
                support: 'Support',
                about: 'About'
            }
        },
        zh: {
            title: '真正的加密货币所有权。强大的Web3体验',
            subtitle: '使用Trust Wallet释放您的加密货币资产的力量并探索Web3世界。',
            nav: {
                wallet: '钱包',
                features: '功能',
                build: '构建',
                support: '支持',
                about: '关于'
            }
        },
        fr: {
            title: 'Propriété réelle de crypto. Expériences Web3 puissantes',
            subtitle: 'Libérez la puissance de vos actifs en cryptomonnaie et explorez le monde de Web3 avec Trust Wallet.',
            nav: {
                wallet: 'Portefeuille',
                features: 'Fonctionnalités',
                build: 'Construire',
                support: 'Support',
                about: 'À propos'
            }
        },
        de: {
            title: 'Echtes Krypto-Eigentum. Leistungsstarke Web3-Erfahrungen',
            subtitle: 'Entfesseln Sie die Macht Ihrer Kryptowährungsvermögen und erkunden Sie die Welt von Web3 mit Trust Wallet.',
            nav: {
                wallet: 'Brieftasche',
                features: 'Funktionen',
                build: 'Bauen',
                support: 'Unterstützung',
                about: 'Über'
            }
        },
        sg: {
            title: 'True crypto ownership. Powerful Web3 experiences',
            subtitle: 'Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.',
            nav: {
                wallet: 'Wallet',
                features: 'Features',
                build: 'Build',
                support: 'Support',
                about: 'About'
            }
        },
        ja: {
            title: '真の暗号資産の所有権。強力なWeb3体験',
            subtitle: 'トラストウォレットで暗号資産の力を解放し、Web3の世界を探求してください。',
            nav: {
                wallet: 'ウォレット',
                features: '機能',
                build: '構築',
                support: 'サポート',
                about: '概要'
            }
        },
        ko: {
            title: '진정한 암호화폐 소유권. 강력한 Web3 경험',
            subtitle: 'Trust Wallet으로 암호화폐 자산의 힘을 발휘하고 Web3 세계를 탐험하세요.',
            nav: {
                wallet: '지갑',
                features: '기능',
                build: '구축',
                support: '지원',
                about: '소개'
            }
        },
        pt: {
            title: 'Propriedade real de cripto. Experiências Web3 poderosas',
            subtitle: 'Desbloqueie o poder dos seus ativos de criptomoeda e explore o mundo da Web3 com a Trust Wallet.',
            nav: {
                wallet: 'Carteira',
                features: 'Recursos',
                build: 'Construir',
                support: 'Suporte',
                about: 'Sobre'
            }
        },
        ru: {
            title: 'Настоящее владение криптовалютой. Мощные Web3-возможности',
            subtitle: 'Раскройте потенциал ваших криптовалютных активов и исследуйте мир Web3 с Trust Wallet.',
            nav: {
                wallet: 'Кошелек',
                features: 'Функции',
                build: 'Создание',
                support: 'Поддержка',
                about: 'О нас'
            }
        },
        es: {
            title: 'Propiedad real de cripto. Experiencias Web3 potentes',
            subtitle: 'Desbloquea el poder de tus activos de criptomoneda y explora el mundo de Web3 con Trust Wallet.',
            nav: {
                wallet: 'Billetera',
                features: 'Características',
                build: 'Construir',
                support: 'Soporte',
                about: 'Acerca de'
            }
        },
        tr: {
            title: 'Gerçek kripto sahipliği. Güçlü Web3 deneyimleri',
            subtitle: 'Trust Wallet ile kripto varlıklarınızın gücünü açığa çıkarın ve Web3 dünyasını keşfedin.',
            nav: {
                wallet: 'Cüzdan',
                features: 'Özellikler',
                build: 'İnşa Et',
                support: 'Destek',
                about: 'Hakkında'
            }
        },
        uk: {
            title: 'Справжнє володіння криптовалютою. Потужні Web3-досвіди',
            subtitle: 'Розкрийте силу ваших криптовалютних активів і досліджуйте світ Web3 з Trust Wallet.',
            nav: {
                wallet: 'Гаманець',
                features: 'Функції',
                build: 'Створення',
                support: 'Підтримка',
                about: 'Про нас'
            }
        },
        vi: {
            title: 'Sở hữu tiền điện tử thực sự. Trải nghiệm Web3 mạnh mẽ',
            subtitle: 'Mở khóa sức mạnh của tài sản tiền điện tử của bạn và khám phá thế giới Web3 với Trust Wallet.',
            nav: {
                wallet: 'Ví',
                features: 'Tính năng',
                build: 'Xây dựng',
                support: 'Hỗ trợ',
                about: 'Giới thiệu'
            }
        }
    };

    langBtn.addEventListener('click', () => {
        langDropdown.style.display = 'block';
    });

    close.addEventListener('click', () => {
        langDropdown.style.display = 'none';
    });

    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.dataset.lang;
            langSpan.textContent = link.textContent.trim();
            langDropdown.style.display = 'none';

            // Update content based on language
            if (translations[selectedLang]) {
                document.querySelector('.hero-text h1').textContent = translations[selectedLang].title;
                document.querySelector('.hero-text p').textContent = translations[selectedLang].subtitle;
                const navLinks = document.querySelectorAll('.nav-links a');
                navLinks[0].textContent = translations[selectedLang].nav.wallet;
                navLinks[1].textContent = translations[selectedLang].nav.features;
                navLinks[2].textContent = translations[selectedLang].nav.build;
                navLinks[3].textContent = translations[selectedLang].nav.support;
                navLinks[4].textContent = translations[selectedLang].nav.about;
            }
        });
    });

    menuIcon.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});