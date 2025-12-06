"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/constants/translations';

// Tip Tanımlamaları
export type Language = 'tr' | 'en' | 'es' | 'de' | 'pt' | 'fr' | 'it';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.tr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Varsayılan dil (Tarayıcıdan da çekilebilir ama şimdilik 'tr')
    const [language, setLanguage] = useState<Language>('tr');
    const [t, setT] = useState(translations.en);

    // Dil değişince çevirileri güncelle
    useEffect(() => {
        // Eğer translations dosyasında o dil yoksa İngilizceye fallback yap
        setT(translations[language] || translations.en);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
