"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/constants/translations';

export type Language = 'tr' | 'en' | 'es' | 'de' | 'pt' | 'fr' | 'it';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['tr'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('tr');

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = translations[language] || translations['en'];

    const value = {
        language,
        setLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
