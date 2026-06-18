import { useState } from "react";
import "./Homestaging.css";
import beforeAfterImg1 from "@/assets/images/services/homestaging/before-after-1.webp";
import beforeAfterImg2 from "@/assets/images/services/homestaging/before-after-2.webp";
import meetingImg from "@/assets/images/services/homestaging/meeting.webp";

export const Homestaging = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="homestaging">
            <div className="homestaging__container">
                <h2 className="homestaging__title">Хоумстейджинг</h2>

                {/* Единое фото с уже встроенными надписями ДО/ПОСЛЕ */}
                <div className="homestaging__image-wrapper">
                    <img
                        src={beforeAfterImg1}
                        alt="Хоумстейджинг: до и после"
                        className="homestaging__image"
                    />
                </div>

                <button
          className="homestaging__button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Свернуть" : "Подробнее"}
        </button>

        {/* 👇 Вся обёртка с контентом */}
        <div
          className={`homestaging__content-wrapper ${
            isExpanded ? "homestaging__content-wrapper--open" : ""
          }`}
        >
          <div className="homestaging__content">
            <p className="homestaging__text">
              Хоумстейджинг — это метод стилизации и декорирования жилья для
              улучшения его внешнего вида и повышения его рыночной стоимости
              при продаже или сдаче в аренду. Во время такой работы учитываются
              различные маркетинговые, психологические и эстетические принципы.
            </p>

            <p className="homestaging__text">
              Что делает хоумстейджер? Изучает рынок. Для стейджера важно знать
              положение дел на рынке недвижимости.
            </p>

            <p className="homestaging__text">
              Вопросы, которыми задаётся хоумстейджер на этом этапе:
            </p>

            <ul className="homestaging__list">
              <li>
                какие квартиры есть в продаже или сдаются в аренду в целевом
                районе?
              </li>
              <li>
                в каком они состоянии: есть ли ремонт и при наличии — как давно
                он проводился?
              </li>
              <li>какие на эти квартиры цены?</li>
              <li>
                какие квартиры сдаются или продаются быстрее, а какие зависают?
              </li>
              <li>
                какова динамика цен и спроса в этом районе в течение года?
              </li>
            </ul>
          </div>

          <div className="homestaging__concept">
            <h3 className="homestaging__concept-title">
              Мы создаем декор-концепцию.
            </h3>

            <div className="homestaging__box">
              <p>
                Анализируя тренды и используя информацию, полученную на
                предыдущих этапах, хоумстейджер создаёт решение для декора
                квартиры.
              </p>
              <p>
                Он не делает кардинальных изменений, работая с тем, что есть,
                однако эти идеи часто полностью меняют восприятие помещения.
              </p>
            </div>

            <div className="homestaging__comparison-title">
              <p>
                <b>ДО</b> и <b>ПОСЛЕ</b> стейджинга:
              </p>
            </div>

            <div className="homestaging__image-wrapper homestaging__image-wrapper--secondary">
              <img
                src={beforeAfterImg2}
                alt="До и после стейджинга"
                className="homestaging__image"
              />
            </div>

            <div className="homestaging__box homestaging__box--conclusion">
              <p>
                В комнате стало <b>больше воздуха</b> и она{" "}
                <b>приобрела аккуратный вид</b> за счёт другого цвета стен,
                убранных вещей, предметов интерьера.
              </p>
            </div>
          </div>

          <div className="homestaging__goals">
            <div className="homestaging__text-block">
              <p>
                <b>Цель</b> — если задача дизайнера интерьера — разработать
                проект, в котором будет комфортно жить заказчику, то
                хоумстейджер мыслит другими категориями. Для него приоритетной
                является подготовка квартиры к продаже и аренде.
              </p>
              <p>
                Хоумстейджер создаёт скорее концепт будущего интерьера, который
                покупатель или арендатор может примерить на себя.
              </p>
              <p>
                Стейджер показывает потенциал квартиры, который можно
                реализовать: многие изменения можно сделать частью постоянного
                жилого интерьера или взять за основу для дальнейших
                преобразований в квартире или доме.
              </p>
            </div>

            <h3 className="homestaging__brief-title">
              Уметь составлять и заполнять бриф
            </h3>
            <div className="homestaging__brief">
              <div className="homestaging__brief-content">
                <p>
                  <b>Бриф</b> — гарантия того, что клиент и хоумстейджер поняли
                  друг друга правильно. Важно продумать все вопросы, чтобы в
                  полной мере осознавать цели и задачи, и выяснить, на какие
                  изменения готов клиент и каких результатов ожидает.
                </p>

                <p className="homestaging__brief-subtitle">
                  Основные вопросы для брифа:
                </p>

                <ul className="homestaging__brief-list">
                  <li>
                    <b>полный адрес объекта, включая этаж</b> — возможно, вид из
                    окон с 9-го этажа станет дополнительной фишкой квартиры,
                    которую стоит подчеркнуть
                  </li>
                  <li>
                    <b>информация о расположении и плане квартиры</b> (угловая
                    ли она, какова площадь каждой из комнат),{" "}
                    <b>о районе</b> (транспортная доступность, наличие парков),{" "}
                    <b>об инфраструктуре</b> (наличие рядом детских садов и
                    школ, бизнес-центров)
                  </li>
                  <li>
                    общая <b>площадь квартиры</b> и отдельных помещений, высота
                    потолков
                  </li>
                  <li>
                    <b>бюджет</b>
                  </li>
                  <li>
                    <b>какие предметы интерьера нужно вписать</b> — для
                    некоторых заказчиков принципиально оставить определённые
                    предметы или стоит предусмотреть, что вывод отдельных
                    объектов может быть крайне затруднён
                  </li>
                  <li>
                    <b>ожидаемая сумма</b> продажи или сдачи в аренду
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="homestaging__example">
            <div className="homestaging__example-card">
              <h3 className="homestaging__example-title">
                Например: Санузел
              </h3>

              <div className="homestaging__example-grid">
                <div className="homestaging__example-col">
                  <h4 className="homestaging__example-heading">Отделка</h4>
                  <ul className="homestaging__example-list">
                    <li>
                      Пол <span>– предпочитаемые материалы</span>
                    </li>
                    <li>
                      Стены <span>– предпочитаемые материалы</span>
                    </li>
                    <li>
                      Потолок <span>– предпочитаемые материалы</span>
                    </li>
                  </ul>
                  <div className="homestaging__example-image-wrapper">
                    <img
                      src={meetingImg}
                      alt="Консультация хоумстейджера"
                      className="homestaging__example-image"
                    />
                  </div>
                </div>

                <div className="homestaging__example-col">
                  <h4 className="homestaging__example-heading">Наполнение</h4>
                  <ul className="homestaging__example-list homestaging__example-list--detailed">
                    <li>Унитаз</li>
                    <li>Биде/гигиенический душ</li>
                    <li>Раковина</li>
                    <li>Зеркало</li>
                    <li>Хранение</li>
                    <li>
                      Ванна/джакузи/душ
                      <ul className="homestaging__example-sublist">
                        <li>сенсорный</li>
                        <li>однорукий</li>
                        <li>двухрукий</li>
                        <li>термостат</li>
                        <li>на ручной душ</li>
                        <li>душ-дождь</li>
                        <li>душ-водопад</li>
                        <li>встроенный</li>
                        <li>накладной</li>
                      </ul>
                    </li>
                    <li>
                      Смеситель на ванну
                      <ul className="homestaging__example-sublist">
                        <li>сенсорный</li>
                        <li>однорукий</li>
                        <li>двухрукий</li>
                        <li>термостат</li>
                        <li>на ручной душ</li>
                        <li>душ-дождь</li>
                        <li>душ-водопад</li>
                        <li>встроенный</li>
                        <li>накладной</li>
                      </ul>
                    </li>
                    <li>
                      Техника:
                      <ul className="homestaging__example-sublist">
                        <li>бритва</li>
                        <li>фен</li>
                        <li>щетки</li>
                        <li>ирригатор</li>
                      </ul>
                    </li>
                    <li>Стиральная/сушильная машина</li>
                    <li>Дополнительно:</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="homestaging__conclusion">
              <p>
                <b>Что в итоге?</b> Хоумстейджер, или стейджер — специалист по
                стилизации и декорированию жилья для улучшения его внешнего
                вида — помогает быстрее и более эффективно продать или сдать в
                аренду недвижимость. Например, российские хоумстейджеры говорят
                об <b>увеличении стоимости аренды до 30%</b> и значительном
                сокращении сроков показа квартиры для продажи или сдачи в
                аренду.
              </p>
            </div>
          </div>
        </div>
            </div>
        </section>
    );
};
