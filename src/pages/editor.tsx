import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import SplitPane from 'react-split-pane';

import { EditorButtons } from '@/components/model/EditorButtons';
import { Explorer } from '@/components/model/Explorer';
import { Editor } from '@/components/model/MonacoEditor';
import { WorkBench } from '@/components/model/WorkBench';

export const ratioRefContext = createContext<RefObject<HTMLDivElement> | null>(null);
export const splitPaneRefContext = createContext<RefObject<SplitPane> | null>(null);
export const ratioAdjustContext = createContext<() => void>(() => {
  return void 0;
});

export type colorModeType = 'dark' | 'light';
export const colorModeContext = createContext<[colorModeType, Dispatch<SetStateAction<colorModeType>>] | null>(null);

const validateColorMode = (colorMode: string): colorModeType => {
  if (colorMode === 'dark') {
    return 'dark';
  }
  return 'light';
};

const Home: NextPage = () => {
  const [t] = useTranslation(['editor', 'common']);

  const ratioRef = useRef<HTMLDivElement>(null);
  const splitPaneRef = useRef<SplitPane>(null);
  const initialColorMode = typeof window !== 'undefined' ? localStorage.getItem('colorMode') ?? 'light' : 'light';
  const [colorMode, setColorMode] = useState<colorModeType>(validateColorMode(initialColorMode));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', colorMode === 'dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('colorMode', colorMode);
    }
  }, [colorMode]);

  const reflectSizeToCanvas = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current === null) {
      return;
    }

    const parent = ref.current.parentElement as HTMLDivElement;

    if (parent.clientWidth > (parent.clientHeight / 9) * 16) {
      ref.current.style.width = `${(parent.clientHeight / 9) * 16}px`;
    } else {
      ref.current.style.width = 'auto';
    }
  };

  const handleResize = useCallback(() => {
    reflectSizeToCanvas(ratioRef);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      return reflectSizeToCanvas(ratioRef);
    });
  }, []);

  return (
    <>
      <ratioRefContext.Provider value={ratioRef}>
        <ratioAdjustContext.Provider value={handleResize}>
          <colorModeContext.Provider value={[colorMode, setColorMode]}>
            <Head>
              <title>{t('title')} | Laze</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-screen h-screen overflow-hidden dark:bg-background dark:text-[#ccc] text-[0.9rem]">
              <div className="flex-1 min-h-0">
                <SplitPane
                  split="horizontal"
                  primary="second"
                  defaultSize="max(12rem, 20%)"
                  pane2Style={{ maxHeight: 'calc(100% - 11.75rem)' }}
                  className="!static"
                  ref={splitPaneRef}
                  onChange={handleResize}
                >
                  <SplitPane
                    split="vertical"
                    primary="first"
                    defaultSize="12rem"
                    pane1Style={{ minWidth: '6rem', maxWidth: '50%' }}
                  >
                    <div className="h-full">
                      <Explorer />
                    </div>
                    <div className="h-full flex-1 flex flex-col">
                      <div className="h-7">
                        <EditorButtons />
                      </div>
                      <div className="flex-1">
                        <Editor />
                      </div>
                    </div>
                  </SplitPane>

                  <div className="w-full h-full">
                    <WorkBench />
                  </div>
                </SplitPane>
              </div>
              <div className="h-6"></div>
            </div>
          </colorModeContext.Provider>
        </ratioAdjustContext.Provider>
      </ratioRefContext.Provider>
    </>
  );
};

type contextType = {
  locale: string;
};
export const getStaticProps = async (context: contextType) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'editor'])),
    },
  };
};

export default Home;
