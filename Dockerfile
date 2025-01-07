FROM continuumio/miniconda3:latest

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/motion-project/bin:$PATH
RUN echo "source activate motion-project" > ~/.bashrc

# Prevents the genration of PyCache that you might have trouble getting rid of, especially on the server
ENV PYTHONDONTWRITEBYTECODE=1

COPY ./backend /backend

WORKDIR /backend